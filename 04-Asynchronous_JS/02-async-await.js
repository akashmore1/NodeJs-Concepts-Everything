const fs = require("fs");
const superagent = require("superagent");

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

const getDogPic = async () => {
  const data = await readFilePro("./dog.txt");

  console.log("data", data);

  const res = await superagent(
    `https://dog.ceo/api/breed/${data}/images/random`
  );

  const dogImg = await res.body.message;

  await writeFilePro("dog-img.txt", dogImg);
};

getDogPic();
