const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

function readFile() {
  const data = fs.readFileSync("Pets.json", "utf-8");
  return JSON.parse(data);
}

function writeFile(data) {
  fs.writeFileSync("Pets.json", JSON.stringify(data, null, 2));
}

app.get("/Pets", (req, res) => {
  const Pets = readFile();
  res.json(Pets);
});

app.post("/Pets", (req, res) => {
  const Pets = readFile();
  const { name, art } = req.body;

  if (name && art) {
    const newpet = {
      id: Pets.length + 1, // besser (komplexere Logik) -> tiere.length > 0 ? Math.max(...tiere.map(a => a.id)) + 1 : 1;
      name: name,
      art: art,
    };
    tiere.push(newTier);
    writeFile(tiere);
    res.status(201).json(newTier);
  } else {
    res.send("Daten unvollständig");
  }
});

app.listen(5005);
