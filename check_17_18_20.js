const mongoose = require('mongoose');
const mammoth = require('mammoth');
const path = require('path');

const TARGET = process.env.DATABASE_URL;
const MOCK_BASE = 'D:\\Web Dev Project\\mizan-care\\mizanscare-client\\public\\mock';

function normalize(val) {
  if (!val) return '';
  if (Array.isArray(val)) return val.map(v => String(v).toLowerCase().replace(/[()]/g, '').trim()).join('/');
  return String(val).toLowerCase().replace(/[()]/g, '').trim();
}

async function readDocx(fp) {
  try { return (await mammoth.extractRawText({ path: fp })).value; } catch (e) { return ''; }
}

async function main() {
  const conn = await mongoose.createConnection(TARGET).asPromise();
  const tests = await conn.db.collection('readingtests').find({}).sort({ title: 1 }).toArray();

  // Mock 17 - show DB answers
  const t17 = tests.find(t => t.title.includes('Mock Test 17'));
  const t18 = tests.find(t => t.title.includes('Mock Test 18'));
  const t19 = tests.find(t => t.title.includes('Mock Test 19'));
  const t20 = tests.find(t => t.title.includes('Mock Test 20'));

  for (const [num, dbTest] of [[17, t17],[18, t18],[19, t19],[20, t20]]) {
    if (!dbTest) continue;
    const passages = dbTest.passages || [];
    const dbQs = [];
    for (const p of passages) dbQs.push(...(p.questions || []).filter(q => q.blockType !== 'instruction'));
    console.log(`\n=== MOCK ${num} DB ANSWERS ===`);
    dbQs.forEach((q, i) => console.log(`  Q${i+1}: "${q.correctAnswer}"`));
  }

  // Mock 17 & 18 raw answer file text
  const f17 = path.join(MOCK_BASE, 'mock 17', 'aNSWERS .docx');
  const f18 = path.join(MOCK_BASE, 'mock 18', 'aNSWERS .docx');
  const f14 = path.join(MOCK_BASE, 'mock 14', 'mock 14 reading Academic Answers .docx');

  console.log('\n=== MOCK 17 ANSWER FILE (Reading section) ===');
  const txt17 = await readDocx(f17);
  const readIdx17 = txt17.search(/reading/i);
  console.log(txt17.substring(readIdx17, readIdx17 + 1000));

  console.log('\n=== MOCK 18 ANSWER FILE (Reading section) ===');
  const txt18 = await readDocx(f18);
  const readIdx18 = txt18.search(/reading/i);
  console.log(txt18.substring(readIdx18, readIdx18 + 1000));

  console.log('\n=== MOCK 14 ANSWER FILE ===');
  const txt14 = await readDocx(f14);
  console.log(txt14.substring(0, 1000));

  await conn.close();
}

main().catch(console.error);
