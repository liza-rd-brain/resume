const pug = require('pug');
const testCompiled = pug.compileFile('avatar.pug');
console.log(testCompiled({ name: "Liza" }));