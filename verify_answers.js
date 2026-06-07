const mongoose = require('mongoose');
require('dotenv').config();

const TARGET = process.env.DATABASE_URL;

// Answers from folder files (answer docx)
const FOLDER_ANSWERS = {
  12: [
    'A','C','D','The amygdala','10 percent','Their personality','graded','therapist','negative thoughts','behaviour','psychotherapy','endorphins','Insomnia',
    'C','D','F','A','D','E','B','C','B','A','FALSE','TRUE','NOT GIVEN',
    'longevity','less developed countries','more developed nations','reform','contributions','generations','historical precedent','NO','NO','YES','NOT GIVEN','YES','NO','B'
  ],
  15: [
    'G','C','F','E','D','B','G','A','C','F','D','imaging equipment','cognitive processing','wrong punch lines',
    'C','A','D','B','B','B','C','TRUE','TRUE','TRUE','FALSE','NOT GIVEN','TRUE','FALSE',
    'YES','NO','YES','NOT GIVEN','NO','YES','C','A','B','D','A','C'
  ]
};

function normalize(val) {
  if (!val) return '';
  if (Array.isArray(val)) return val.map(v => String(v).toLowerCase().trim()).join('/');
  return String(val).toLowerCase().replace(/[()]/g, '').trim();
}

async function main() {
  const conn = await mongoose.createConnection(TARGET).asPromise();
  const tests = await conn.db.collection('readingtests').find({}).sort({ title: 1 }).toArray();

  for (const mockNum of [12, 15]) {
    const dbTest = tests.find(t => t.title.includes(`Mock Test ${mockNum}`));
    if (!dbTest) { console.log(`Mock ${mockNum}: NOT IN DB`); continue; }

    const passages = dbTest.passages || dbTest.sections || [];
    const dbQuestions = [];
    for (const p of passages) {
      const qs = (p.questions || []).filter(q => q.blockType !== 'instruction');
      dbQuestions.push(...qs);
    }

    const folderAns = FOLDER_ANSWERS[mockNum];
    console.log(`\n=== MOCK ${mockNum} — DB has ${dbQuestions.length} Q | Folder has ${folderAns.length} answers ===`);

    let matched = 0, mismatched = 0;
    for (let i = 0; i < Math.max(dbQuestions.length, folderAns.length); i++) {
      const dbQ = dbQuestions[i];
      const folderA = folderAns[i] || 'N/A';
      const dbA = dbQ ? (dbQ.correctAnswer || '') : 'N/A';
      const dbNorm = normalize(dbA);
      const folderNorm = normalize(folderA);
      const match = dbNorm === folderNorm || dbNorm.includes(folderNorm) || folderNorm.includes(dbNorm);
      if (match) matched++;
      else {
        mismatched++;
        console.log(`  Q${i+1}: DB="${dbA}" | Folder="${folderA}" ❌`);
      }
    }
    console.log(`  Result: ${matched} matched ✅ | ${mismatched} mismatched ❌`);
  }

  await conn.close();
}

main().catch(console.error);
