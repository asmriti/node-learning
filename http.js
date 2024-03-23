const http = require("http");
const fs = require("fs");
const path = require("path");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Hello userrr");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/user") {
    res.write("Welcome user Smriti");
    res.end();
  }
});
server.listen(3000, () => console.log("Server is up and running"));
