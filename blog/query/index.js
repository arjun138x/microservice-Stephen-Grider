const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 4002;
app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  console.log(posts);
  res.status(200).send({});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
