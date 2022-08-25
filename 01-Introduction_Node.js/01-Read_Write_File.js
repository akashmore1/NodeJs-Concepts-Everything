// fs stands for file system.
// fs module used for reading and writing data from a file.
// require(fs) will return an object of lot of function.
// This object we are directly assigning to fs variable
const fs = require("fs");

const greet = fs.readFileSync("./files/hi.txt", "utf-8");
console.log(greet);
