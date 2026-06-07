const mongoose = require('mongoose');
const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const TARGET = process.env.DATABASE_URL;

const MOCK_BASE = 'D:\\Web Dev Project\\mizan-care\\mizanscare-client\\public\\mock';

const READING_FILES = {
  11: '11 AC reading .docx',
  12: 'ac reading.rtf',
  13: 'ReDING 13 AC (1).docx',
  14: '14 reading ac.docx',
  15: 'Reading AC 15 .rtf',
  16: 'REading AC 16 .docx',
  17: 'Reading AC 17 .docx',
  18: '18 AC reading.docx',
  19: 'Reading 19 AC .docx',
  20: 'Reading AC 20 .docx',
};

async function extractText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.docx') {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  } else if (ext === '.rtf') {
    // RTF: read as plain text and strip RTF tags
    const raw = fs.readFileSync(filePath, 'utf8');
    const cleaned = raw
      .replace(/\{\\[^}]*\}/g, '')
      .replace(/\\[a-z]+\d*\s?/g, '')
      .replace(/[{}\\]/g, '')
      .replace(/\r?\n+/g, '\n')
      .trim();
    return cleaned;
  }
  return '';
}

function countQuestionLikeLines(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  let count = 0;
  for (const line of lines) {
    // match lines starting with a number followed by . or ) or space
    if (/^\d{1,2}[\.\)]\s/.test(line) || /^\d{1,2}\s+[A-Z]/.test(line)) {
      count++;
    }
  }
  return count;
}

function findPassageTitles(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const titles = [];
  for (const line of lines) {
    // Lines that look like titles: all caps or title case, short, no period at end
    if (
      line.length > 5 && line.length < 120 &&
      !line.match(/^\d/) &&
      (line === line.toUpperCase() || /^[A-Z][^.!?]*$/.test(line)) &&
      !line.includes('Questions') &&
      !line.includes('Answer') &&
      !line.includes('Write') &&
      !line.includes('Choose')
    ) {
      titles.push(line);
    }
  }
  return titles.slice(0, 10); // top 10 candidates
}

async function main() {
  const conn = await mongoose.createConnection(TARGET).asPromise();
  const tests = await conn.db.collection('readingtests').find({}).sort({ title: 1 }).toArray();

  console.log('========================================');
  console.log('  READING MOCK TEST 11-20: COMPARISON  ');
  console.log('========================================\n');

  for (let num = 11; num <= 20; num++) {
    const dbTest = tests.find(t => t.title.includes(`Mock Test ${num}`));
    const fileName = READING_FILES[num];
    const folderName = `mock ${num}`;
    const filePath = path.join(MOCK_BASE, folderName, fileName);

    console.log(`--- MOCK ${num} ---`);

    // Database info
    if (dbTest) {
      const passages = dbTest.passages || dbTest.sections || [];
      console.log('[DB] Passages: ' + passages.length + ' | Total Q: ' + passages.reduce((s, p) => s + (p.questions || []).filter(q => q.blockType !== 'instruction').length, 0));
      passages.forEach((p, i) => {
        const qs = (p.questions || []).filter(q => q.blockType !== 'instruction');
        console.log(`  DB Passage ${i+1}: "${p.title || p.passageTitle}" | Q: ${qs.length}`);
      });
    } else {
      console.log('[DB] NOT FOUND');
    }

    // Folder file info
    if (fs.existsSync(filePath)) {
      try {
        const text = await extractText(filePath);
        const wordCount = text.split(/\s+/).filter(Boolean).length;
        const qCount = countQuestionLikeLines(text);
        const titleCandidates = findPassageTitles(text);
        console.log(`[FILE] ${fileName} | Words: ${wordCount} | Q-like lines: ${qCount}`);
        console.log(`  File title candidates: ${titleCandidates.slice(0, 5).join(' | ')}`);
      } catch (e) {
        console.log(`[FILE] Error reading: ${e.message}`);
      }
    } else {
      console.log(`[FILE] NOT FOUND at: ${filePath}`);
    }

    // Match verdict
    console.log('');
  }

  await conn.close();
}

main().catch(console.error);
