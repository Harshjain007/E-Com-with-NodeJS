const fs = require('fs');
fs.writeFileSync('hi.txt', 'This is made automatically by the Node');
console.log(`New File created`)