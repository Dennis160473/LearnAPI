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

app.get("/movie", (req, res) => {
  const movie = readFile();
  res.json(movie);
});

app.post("/movie", (req, res) => {
  const movie = readFile();
  const { title, year, actor } = req.body;

  if (title && year && actor) {
    const newmovie = {
      id: movie.length + 1,
      title: title,
      year: year,
      actor: actor,
    };
    movie.push(newmovie);
    writeFile(movie);
    res.status(201).json(newmovie);
  } else {
    res.send("Data Incomplete!");
  }
});

app.put("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = readFile();
  const newArt = req.body.art;

  const foundfilm = movie.find((change) => change.id == id);
  foundfilm.art = newArt;
  res.json(foundfilm);
  writeFile(movie);
});

app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = readFile();
  const index = movie.findIndex((insert) => insert.id == id);
  const deletemovie = movie.splice(index, 1);
  writeFile(movie);
  res.json("Delete complete: " + deletemovie[0].title);
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  const foundtitle = movie.find((movie) => movie.id == id);

  if (foundtitle) {
    res.json(foundtitle);
  } else {
    res.status(404).send("User not found with ID: " + id);
  }
});

app.listen(5050);
