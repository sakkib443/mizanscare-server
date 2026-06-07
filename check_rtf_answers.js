const mammoth = require('mammoth');
const path = require('path');

const MOCK_BASE = 'D:\\Web Dev Project\\mizan-care\\mizanscare-client\\public\\mock';

const files = [
  { mock: 12, file: path.join(MOCK_BASE, 'mock 12', '12 Answers', 'Reading Answers.docx'), label: 'Mock 12 Answer file' },
  { mock: 15, file: path.join(MOCK_BASE, 'mock 15', 'aNSWERS.docx'), label: 'Mock 15 Answer file' },
];

async function main() {
  for (const f of files) {
    console.log('=== ' + f.label + ' ===');
    try {
      const result = await mammoth.extractRawText({ path: f.file });
      console.log(result.value.substring(0, 2000));
    } catch (e) {
      console.log('Error:', e.message);
    }
    console.log('');
  }
}

main().catch(console.error);
