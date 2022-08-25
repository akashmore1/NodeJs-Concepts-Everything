// fs stands for file system.
// fs module used for reading and writing data from a file.
// require(fs) will return an object of lot of function.
// This object we are directly assigning to fs variable
const fs = require("fs");

// With readFileSync() we can read file.
const greet = fs.readFileSync("./files/hi.txt", "utf-8");
console.log(greet);

let intro = "This is Akash";
// With writeFileSync() we can write in a file.
fs.writeFileSync("./files/output.txt", intro);
