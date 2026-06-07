const mongoose = require('mongoose');
require('dotenv').config();

// Usage: SOURCE_DB=<url> TARGET_DB=<url> node migrate_reading.js
const SOURCE = process.env.SOURCE_DB;
const TARGET = process.env.TARGET_DB || process.env.DATABASE_URL;

async function migrate() {
  const sourceConn = await mongoose.createConnection(SOURCE).asPromise();
  const targetConn = await mongoose.createConnection(TARGET).asPromise();

  const tests = await sourceConn.db.collection('readingtests').find({
    title: { $in: [
      'Reading Mock Test 11 - Academic',
      'Reading Mock Test 12 - Academic',
      'Reading Mock Test 13 - Academic',
      'Reading Mock Test 14 - Academic',
      'Reading Mock Test 15 - Academic',
      'Reading Mock Test 16 - Academic',
      'Reading Mock Test 17 - Academic',
      'Reading Mock Test 18 - Academic',
      'Reading Mock Test 19 - Academic',
      'Reading Mock Test 20 - Academic',
    ]}
  }).sort({ title: 1 }).toArray();

  console.log('Found:', tests.length, 'tests');
  tests.forEach(t => console.log(' -', t.title));

  const toInsert = tests.map(({ _id, ...rest }) => rest);
  const result = await targetConn.db.collection('readingtests').insertMany(toInsert);
  console.log('\nInserted:', result.insertedCount, 'tests');

  const verify = await targetConn.db.collection('readingtests').find({}).sort({ title: 1 }).toArray();
  console.log('\nMizanscare now has', verify.length, 'reading tests:');
  verify.forEach(t => console.log(' -', t.title));

  await sourceConn.close();
  await targetConn.close();
}

migrate().catch(console.error);
