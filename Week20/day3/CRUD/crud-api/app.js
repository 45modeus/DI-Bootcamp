import express from 'express';
import posts from './data.js'
const app = express();

app.use(express.json());

app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  if(!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:postID", (req, res) => {
  const id = Number(req.params.postID);
  const post = posts.find(p => p.id === id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.put("/api/posts/:postID", (req, res) => {
    const postID = Number(req.params.postID);
  const { title, content } = req.body;

  const index = posts.findIndex(post => post.id === postID);

  if (index !== -1) {
    posts[index] = {
        id: postID,
        title: title || posts[index].title,
        content: content || posts[index].content
    };

    res.status(200).json({ message: "Post updated" });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.delete("/api/posts/:postID", (req, res) => {
   const postID = Number(req.params.postID);
   const index = posts.findIndex(post => post.id === postID);

   if(!index !== -1) {
    posts.splice(index, 1);
    res.status(200).json({ message: "Post deleted" });
   } else {
    res.status(404).json({ message: "Post not found" });
   }
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});