const fs = require('fs');
const wkhtmltopdf = require('wkhtmltopdf');

const file = fs.createReadStream('./test-data/test.html');

wkhtmltopdf(file, { output: `test-data/test_${Date.now()}.pdf`, userStyleSheet: 'test-data/test.css' });