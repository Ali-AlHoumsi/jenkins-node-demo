const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Jenkins Pipeline Running Successfully!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

