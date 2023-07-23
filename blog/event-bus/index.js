const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = 4005;
app.use(bodyParser.json());

const events = [];
app.post("/events", (req, res) => {
  try {
    const event = req.body;
    events.push(event);
    axios.post("http://localhost:4000/events", event); // for post
    axios.post("http://localhost:4001/events", event); // for comment
    axios.post("http://localhost:4002/events", event);
    axios.post("http://localhost:4003/events", event);
  } catch (error) {
    console.log({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.status(200).send({ events });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
