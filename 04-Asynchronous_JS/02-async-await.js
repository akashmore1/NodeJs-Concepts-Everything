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

  return "Dog Pic Updated";
};

getDogPic();

// Returned value from async function
// async function will always return promise
// So in order to acess its returned value we can use then() or await
// e.g.

getDogPic()
  .then((res) => {
    console.log(res);
  })
  // In order to error handling work we will need to explicitaly throw error in async function
  .catch((err) => {
    console.log(err);
  });

// Or we can use async-await again to print returned value
(async () => {
  const res = await getDogPic();
  console.log(res);
})();
