
const fs = require('fs');

module.exports = JSON.parse(require('fs').readFileSync('list.json', 'utf8'));
