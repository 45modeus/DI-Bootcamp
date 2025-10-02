import http from 'http';

const json =
{
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(json));
})

server.listen(3000, 'localHost', () => {
    console.log('Server is listening to port 3000')
})