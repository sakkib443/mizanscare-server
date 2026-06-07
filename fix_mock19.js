const mongoose = require('mongoose');
require('dotenv').config();

const TARGET = process.env.DATABASE_URL;

// Correct answers from folder answer file
const FIXES = {
  1:  'x',
  2:  'iii',
  20: 'center',
  39: 'globally',
};

async function main() {
  const conn = await mongoose.createConnection(TARGET).asPromise();
  const db = conn.db;

  const test = await db.collection('readingtests').findOne({ title: /Mock Test 19/ });
  if (!test) { console.log('Mock 19 not found!'); return; }

  console.log('Found:', test.title);

  const passages = test.passages || test.sections || [];
  let qCounter = 0;
  let updatedCount = 0;

  for (const passage of passages) {
    for (const q of (passage.questions || [])) {
      if (q.blockType === 'instruction') continue;
      qCounter++;
      if (FIXES[qCounter] !== undefined) {
        const oldAns = q.correctAnswer;
        q.correctAnswer = FIXES[qCounter];
        console.log(`  Q${qCounter}: "${oldAns}" → "${q.correctAnswer}" ✅`);
        updatedCount++;
      }
    }
  }

  // Save back
  const updateField = test.passages ? 'passages' : 'sections';
  await db.collection('readingtests').updateOne(
    { _id: test._id },
    { $set: { [updateField]: passages } }
  );

  console.log(`\nUpdated ${updatedCount} answers in Mock 19.`);

  // Verify
  const updated = await db.collection('readingtests').findOne({ _id: test._id });
  const updatedPassages = updated.passages || updated.sections || [];
  let qC = 0;
  for (const p of updatedPassages) {
    for (const q of (p.questions || [])) {
      if (q.blockType === 'instruction') continue;
      qC++;
      if ([1, 2, 20, 39].includes(qC)) {
        console.log(`  Verify Q${qC}: "${q.correctAnswer}"`);
      }
    }
  }

  await conn.close();
}

main().catch(console.error);
