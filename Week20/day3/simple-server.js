import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url === "/"){
         res.end('<h1>Welcome to my Home page</h1>');
    } else if (req.url === "/about") {
         res.end('<h1>About us</h1><p>This is my about page</p>');
    } else if (req.url === "/contact") {
         res.end('<h1>Contact</h1><p>This is my contact page</p>');
    } else {
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening at localhost on port 3000')
})