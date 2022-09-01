// In bigger applications routing can be very complex.
// So we use a tool for it called 'Express'
// For now we will do everything from scrach

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is from overview");
  } else if (pathName === "/product") {
    res.end("This is from product");
  } else {
    // a header is a piece of information about the response we are sending
    res.writeHead(404);
    res.end("Page cannot be found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server at port 8000");
});
