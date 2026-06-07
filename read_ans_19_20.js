const mammoth = require('mammoth');
const path = require('path');

const MOCK_BASE = 'D:\\Web Dev Project\\mizan-care\\mizanscare-client\\public\\mock';

async function readDocx(fp) {
  try { return (await mammoth.extractRawText({ path: fp })).value; } catch (e) { return ''; }
}

async function main() {
  const f19 = path.join(MOCK_BASE, 'mock 19', 'answer 19 .docx');
  const f20 = path.join(MOCK_BASE, 'mock 20', 'mock 20 Answers .docx');

  console.log('=== MOCK 19 FULL ANSWER FILE ===');
  console.log(await readDocx(f19));

  console.log('\n\n=== MOCK 20 FULL ANSWER FILE ===');
  console.log(await readDocx(f20));
}

main().catch(console.error);
