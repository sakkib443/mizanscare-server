const mongoose = require('mongoose');

const SOURCE = 'mongodb+srv://jiboneducation:jiboneducation@cluster0.b5kfivm.mongodb.net/jiboneducation?appName=Cluster0';
const TARGET = 'mongodb+srv://mizanscare:mizanscare@cluster0.b5kfivm.mongodb.net/mizanscare?appName=Cluster0';

async function migrate() {
  const sourceConn = await mongoose.createConnection(SOURCE).asPromise();
  const targetConn = await mongoose.createConnection(TARGET).asPromise();

  const sourceDb = sourceConn.db;
  const targetDb = targetConn.db;

  const tests = await sourceDb.collection('listeningtests').find({
    title: { $in: [
      'Listening Mock Test 11 – Academic',
      'Listening Mock Test 12 – Academic',
      'Listening Mock Test 13 – Academic',
      'Listening Mock Test 14 – Academic',
      'Listening Mock Test 15 – Academic',
      'Listening Mock Test 16 – Academic',
      'Listening Mock Test 17 – Academic',
      'Listening Mock Test 18 – Academic',
      'Listening Mock Test 19 – Academic',
      'Listening Mock Test 20 – Academic',
    ]}
  }).sort({ title: 1 }).toArray();

  console.log('Found in source:', tests.length, 'tests');
  tests.forEach(t => console.log(' -', t.title, '| mainAudio:', t.mainAudioUrl ? 'YES' : 'MISSING'));

  const toInsert = tests.map(({ _id, ...rest }) => rest);

  const result = await targetDb.collection('listeningtests').insertMany(toInsert);
  console.log('\nInserted into mizanscare:', result.insertedCount, 'tests');

  // verify
  const verify = await targetDb.collection('listeningtests').find({}).sort({ title: 1 }).toArray();
  console.log('\nMizanscare now has', verify.length, 'listening tests:');
  verify.forEach(t => console.log(' -', t.title));

  await sourceConn.close();
  await targetConn.close();
}

migrate().catch(console.error);
