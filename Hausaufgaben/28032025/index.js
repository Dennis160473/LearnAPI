const { error } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
const { title } = require("process");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5500",
  })
);

function readFile() {
  const movie = fs.readFileSync("movie.json", "utf-8");
  return JSON.parse(movie);
}

function writeFile(movie) {
  fs.writeFileSync("movie.json", JSON.stringify(movie, null, 2));
}
app.get("/movie", (req, res) => {
  try {
    const movie = readFile();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/movie", (req, res) => {
  const movie = readFile();
  res.json(movie);
});

app.post("/movie", (req, res) => {
  try {
    const movie = readFile();
    const { title, year, actor } = req.body;
    const nametaken = movie.some(
      (movie) =>
        movie.title == title && movie.year == year && movie.actor == actor
    );
    if (nametaken) {
      return res
        .status(400)
        .json({ error: "There is already a film with this data!" });
    }

    if (name.length < 3) {
      return res.status(400).json({
        error:
          "Input value is smaller than expected! Data requires at least 3 characters",
      });
    }

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
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/movie/:id", (req, res) => {
  try {
    const id = req.params.id;
    const movie = readFile();
    const newArt = req.body.art;

    const foundfilm = movie.find((change) => change.id == id);
    foundfilm.art = newArt;
    res.json(foundfilm);
    writeFile(movie);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/movie/:id", (req, res) => {
  try {
    const id = req.params.id;
    const foundtitle = movie.find((movie) => movie.id == id);
    if (!(title && year && actor)) {
      return res.status(400).json({
        error:
          "Bad Request error indicates that the server cannot or process the request due to a client error.",
      });
    }

    if (foundtitle) {
      return res.json(foundtitle);
    } else {
      res.status(404).send("User not found with ID: " + id);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("movie/search", (req, res) => {
  try {
    const { id, title, year, actor } = req.query.id;
    let foundfilm = readFile();
    if (!(title && year && actor)) {
      return res.status(400).json({
        error:
          "Bad Request error indicates that the server cannot or process the request due to a client error.",
      });
    }
    if (id) {
      foundfilm = movie.filter((movie) => movie.id == id);
    }
    if (title) {
      foundfilm = movie.filter((movie) => movie.title == title);
    }
    if (year) {
      foundfilm = movie.filter((movie) => movie.year == year);
    }
    if (actor) {
      foundfilm = movie.filter((movie) => movie.actor == actor);
    }
    res.json(foundfilm);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/movie/:id", (req, res) => {
  try {
    const id = number(req.params.id);
    const movie = readFile();
    const index = movie.findIndex((insert) => insert.id == id);
    const deletemovie = movie.splice(index, 1);
    if (id === req.params.id) {
      return res.status(400).json({ error: " Bad Request. ID is a number!" });
    }
    if (index === -1) {
      return res.status(404).json({ error: "Movie not found" });
    }
    writeFile(movie);
    res.json("Delete complete: " + deletemovie[0].title);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5050);
