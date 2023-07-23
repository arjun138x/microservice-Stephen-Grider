const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 4001;
app.use(cors());
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  try {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    const comment = commentsByPostId[req.params.id] || [];
    comment.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comment;
    await axios.post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: { id: commentId, content, postId: req.params.id, status: "pending" }
    });
    res.status(201).send(comment);
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.post("/events", (req, res) => {
  console.log(`Event Received: ${req.body.type}`);
  res.status(200).send({});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
