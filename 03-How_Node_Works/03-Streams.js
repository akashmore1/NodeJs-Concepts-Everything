const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("./files/test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // =============================================================== //
  // Solution 2
  // const readable = fs.createReadStream("./files/test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (error) => {
  //   console.log(error);
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });
  // 1. Readable stream is much faster than actually sending the result with response writable stream in network.
  // 2. This will overwhelm the response stream, which cannot handle all this coming data superfast.
  // 3. This problem is called as Back Pressure.
  // So here is a better solution that will resolve back pressure
  // Solution 3

  const readable = fs.createReadStream("./files/test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
