import express from 'express';
import posts from './data.js';
const app = express();


app.get('/api/posts/:postID', (req, res) => {
    const postID = req.params.postID;
    const post = posts.find(p => p.id === Number(postID));

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.get('/api/search', (req, res) => {
    const titleQuery = req.query.title;

    if (!titleQuery) {
        return res.json({ message: 'Please provide a title' });
    }

    const filteredPosts = posts.filter(post => {
        const match = post.title.toLowerCase().includes(titleQuery.toLowerCase());
        if (match) {
            console.log('Match post:', post.title);
        }
        return match;
    });

    if (filteredPosts.length > 0) {
        res.json(filteredPosts);
    } else {
        res.json({ message: 'No posts match your search' });
    }
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});