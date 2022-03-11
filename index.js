import http from 'http';

const host = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    req.method;
    req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(port, host, () => {
    console.log(`Server started on ${host}:${port}`);
});