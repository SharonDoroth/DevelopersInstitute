const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Welcome to My Server</h1>");
  res.write("<p>This is the first line of HTML.</p>");
  res.write("<p>This is the second line of HTML.</p>");

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Server is running at http://localhost:3000/");
});

