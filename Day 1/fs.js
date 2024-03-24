// File System
const fs = require("fs");

// async function
fs.writeFile("message.txt", "Heeeleleoooo", (err) => {
  if (err) throw err;

  console.log("yayy file has been written");
});

console.log("hhehhehe");

fs.readFile("./love.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
