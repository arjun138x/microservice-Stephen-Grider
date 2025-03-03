import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());
const PORT = 4000;

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.get("/api/users/currentuser", (req, res) => {
  res.json("Hi there!");
});

app.listen(PORT, () => {
  console.log(`Listing on  http://localhost:${PORT}`);
});
