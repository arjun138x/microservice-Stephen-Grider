const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = 4000;
app.use(cors());
app.use(bodyParser.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  console.log(`Event Received: ${req.body.type}`);
  res.status(200).send({});
});

app.post("/posts", async (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = { id, title };

    await axios.post("http://localhost:4005/events", {
      type: "PostCreated",
      data: { id, title }
    });
    res.status(201).send(posts[id]);
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
