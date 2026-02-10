const path = require('path')

const file = "text/mu.txt"

// path

console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.resolve(file));
console.log(path.isAbsolute(file));


// global 
console.log(__dirname);
console.log(__filename);