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
      resolve("File written successfully");
    });
  });
};

const getDogImgs = async () => {
  const data = await readFilePro("./dog.txt");
  const req1 = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );

  const req2 = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );

  const req3 = superagent.get(
    `https://dog.ceo/api/breed/${data}/images/random`
  );

  const reqs = await Promise.all([req1, req2, req3]);

  const imgs = reqs.map((el) => {
    return el.body.message;
  });

  await writeFilePro("./dog-img.txt", imgs.join("\n"));

  console.log(imgs);
  return imgs;
};

getDogImgs();
