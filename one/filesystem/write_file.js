var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hellant!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});