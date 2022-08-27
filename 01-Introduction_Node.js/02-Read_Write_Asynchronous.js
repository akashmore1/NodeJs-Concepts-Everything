const fs = require("fs");

// Asynchronous way of reading and writing file
const greet = fs.readFile("./files/hi.txt", "utf-8", (err, data) => {
  console.log(data);
});
fs.writeFile(
  "./files/output.txt",

  `Hello World`,
  (err) => {
    if (err) {
      console.log("err");
    }
  }
);
