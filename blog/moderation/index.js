const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = 4003;
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.comment.includes("orange") ? "rejected" : "approved";
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: { ...data, status }
    });
  }
  res.status(200).send({});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
