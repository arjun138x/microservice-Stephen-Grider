const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = 4002;
app.use(bodyParser.json());
app.use(cors());

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }
};

const posts = {};
app.get("/posts", (req, res) => {
  return res.status(200).send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  return res.status(200).send({});
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  const res = await axios.get("http://localhost:4005/events");
  for (let event of res?.data?.events) {
    console.log("processing event", event.type);
    handleEvent(event.type, event.data);
  }
});
