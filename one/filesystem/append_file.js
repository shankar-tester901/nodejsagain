var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Roxy tecst ing tasdf asdfiasdf asdfa!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});