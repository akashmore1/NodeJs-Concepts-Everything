// We want to call dog api and pass dog breed read from dog.txt as parameter to api
const fs = require("fs");
const superagent = require("superagent");

// // With callback hell
// fs.readFile("./dog.txt", (err, data) => {
//   console.log(`Breed = ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       // Create a new file and save this img url
//       fs.writeFile("./dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random image saved to file");
//       });
//     });
// });

// With Promises
fs.readFile("./dog.txt", (err, data) => {
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      return res.body.message;
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Make reading and writing files through promises

const readFilePro = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePro = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) reject(err);
      resolve("Success");
    });
  });
};

readFilePro("./dog.txt").then((res) => {
  superagent
    .get(`https://dog.ceo/api/breed/${res}/images/random`)
    .then((res) => {
      console.log(res.body.message);
    });
});
