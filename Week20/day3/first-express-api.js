import express from 'express';
const app = express();

app.get('/api/greetings', (req, res) => {
    res.json({ message: 'Welcome!' });
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});