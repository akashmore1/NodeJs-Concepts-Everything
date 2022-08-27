// Creating simple server

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello From Server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server on port 8000");
});
