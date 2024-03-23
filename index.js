// console.log(5 + 5);

const exportedsayName = require("./sayName");

// sayName();

console.log(exportedsayName);

exportedsayName.sayName();

console.log(`Directory name ${__dirname}`);
console.log(`Filename ${__filename}`);
