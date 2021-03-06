var Mocha = require('mocha');
var path = require('path');
require('babel-polyfill');
var hasGenerator = (function() {
  try {
    return !!eval('(function*() {}).return');
  } catch (err) {
    return false;
  }
}());

// Instantiate a Mocha instance.
var mocha = new Mocha({
  ui: 'tdd',
  reporter: 'list'
});

mocha.addFile(path.join('tests', 'tests-es5.js'));
if (hasGenerator) {
  mocha.addFile(path.join('tests', 'tests.js'));
}

// Run the tests.
mocha.run(function() {
  process.on('exit', function(exitCode) {
    process.exit(exitCode);
  });
});
