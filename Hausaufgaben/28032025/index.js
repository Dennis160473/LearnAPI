const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

function readFile() {
  const data = fs.readFileSync("movie.json", "utf-8");
  return JSON.parse(data);
}

function writeFile(data) {
  fs.writeFileSync("movie.json", JSON.stringify(data, null, 2));
}

app.get("/Pets", (req, res) => {
  const films = readFile();
  res.json(films);
});

app.get("/movie.json", (req, res) => {
  res.send();
});
