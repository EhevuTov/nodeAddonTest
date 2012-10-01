var worldjs = require('./hello');
var worldcc = require('./build/Release/hello');

console.log('js: hello '+worldjs.hello());

console.log('cp: hello '+worldcc.hello());
