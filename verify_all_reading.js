const mongoose = require('mongoose');
const mammoth = require('mammoth');
const path = require('path');
const fs = require('fs');

const TARGET = process.env.DATABASE_URL;
const MOCK_BASE = 'D:\\Web Dev Project\\mizan-care\\mizanscare-client\\public\\mock';

const ANSWER_FILES = {
  11: 'mock 11 aNSWERS .docx',
  13: 'mock 13 reading aNSWERS .docx',
  14: 'mock 14 reading Academic Answers .docx',
  16: 'mock 16 aNSWERS .docx',
  17: 'aNSWERS .docx',
  18: 'aNSWERS .docx',
  19: 'answer 19 .docx',
  20: 'mock 20 Answers .docx',
};

function normalize(val) {
  if (!val) return '';
  if (Array.isArray(val)) return val.map(v => String(v).toLowerCase().replace(/[()]/g, '').trim()).join('/');
  return String(val).toLowerCase().replace(/[()]/g, '').trim();
}

function parseAnswers(text) {
  // Find "Reading" section if present
  const readingIdx = text.search(/\bReading\b/i);
  const readingText = readingIdx >= 0 ? text.substring(readingIdx) : text;

  const answers = [];
  // Match patterns like: 1. A  or  1 A  or  1.A  or  27.longevity
  const lines = readingText.split(/\n/).map(l => l.trim()).filter(Boolean);
  for (const line of lines) {
    // Match numbered answers
    const matches = line.match(/(\d+)[\.\)]\s*([^\d\n]{1,60}?)(?=\s*\d+[\.\)]|$)/g);
    if (matches) {
      for (const m of matches) {
        const parts = m.match(/(\d+)[\.\)]\s*(.+)/);
        if (parts) {
          const num = parseInt(parts[1]);
          const ans = parts[2].trim();
          if (num >= 1 && num <= 40 && ans) answers[num - 1] = ans;
        }
      }
    }
  }
  return answers;
}

async function readDocx(filePath) {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  } catch (e) {
    return null;
  }
}

async function main() {
  const conn = await mongoose.createConnection(TARGET).asPromise();
  const tests = await conn.db.collection('readingtests').find({}).sort({ title: 1 }).toArray();

  console.log('==============================================');
  console.log('  FULL ANSWER VERIFICATION — MOCK 11-20');
  console.log('==============================================\n');

  for (const [mockNum, ansFile] of Object.entries(ANSWER_FILES)) {
    const num = parseInt(mockNum);
    const dbTest = tests.find(t => t.title.includes(`Mock Test ${num}`));
    const filePath = path.join(MOCK_BASE, `mock ${num}`, ansFile);

    console.log(`--- MOCK ${num} ---`);

    if (!dbTest) { console.log('  DB: NOT FOUND\n'); continue; }
    if (!fs.existsSync(filePath)) { console.log(`  File: NOT FOUND — ${ansFile}\n`); continue; }

    const passages = dbTest.passages || dbTest.sections || [];
    const dbQuestions = [];
    for (const p of passages) {
      const qs = (p.questions || []).filter(q => q.blockType !== 'instruction');
      dbQuestions.push(...qs);
    }

    const text = await readDocx(filePath);
    if (!text) { console.log('  File: Could not read\n'); continue; }

    const folderAns = parseAnswers(text);

    // Count valid folder answers
    const validFolderAns = folderAns.filter(Boolean);
    console.log(`  DB: ${dbQuestions.length} questions | Folder answers parsed: ${validFolderAns.length}`);

    if (validFolderAns.length < 30) {
      console.log(`  ⚠️  Too few answers parsed from file — showing raw text snippet:`);
      console.log('  ' + text.substring(0, 400).replace(/\n/g, ' '));
      console.log('');
      continue;
    }

    let matched = 0, mismatched = 0;
    for (let i = 0; i < dbQuestions.length; i++) {
      const dbA = normalize(dbQuestions[i]?.correctAnswer || '');
      const folderA = normalize(folderAns[i] || '');
      const match = dbA === folderA || dbA.includes(folderA) || folderA.includes(dbA);
      if (match) matched++;
      else {
        mismatched++;
        console.log(`  Q${i+1}: DB="${dbQuestions[i]?.correctAnswer}" | Folder="${folderAns[i]}" ❌`);
      }
    }
    console.log(`  ✅ ${matched}/40 matched | ❌ ${mismatched} mismatched`);
    console.log('');
  }

  await conn.close();
}

main().catch(console.error);
