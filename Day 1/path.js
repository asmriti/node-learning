// Path module

const path = require("path");

// join multiple files together
const fileLocation = path.join(__dirname, "index.js");

console.log(fileLocation);

// get basename of the file

const fileName = path.basename(fileLocation);
console.log(fileName);
