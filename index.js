var worldjs = require('./hello');
var worldcc = require('./build/Release/hello');

var l = process.hrtime();
worldjs.hello();
l = process.hrtime(l);

console.log('Hello '+worldjs.hello());
console.log('js: '+l[0]+' seconds and '+l[1]+' nanoseconds');

var m = process.hrtime();
worldcc.hello();
m = process.hrtime(m);

console.log('Hello '+worldcc.hello());
console.log('cc: '+m[0]+' seconds and '+m[1]+' nanoseconds');
