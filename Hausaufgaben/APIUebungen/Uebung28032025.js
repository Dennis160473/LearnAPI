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
  const { Art, Stamm, Klasse, Ordnung, Familie, Gattung } = req.body;

  if (art && family) {
    const newpet = {
      id: Pets.length + 1,
      art: Art,
      tribe: Stamm,
      class: Klasse,
      order: Ordnung,
      family: Familie,
      genus: Gattung,
    };
    Pets.push(newpet);
    writeFile(Pets);
    res.status(201).json(newpet);
  } else {
    res.send("Data incompled!");
  }
});

app.put("/Pets/:id", (req, res) => {
  const id = req.params.id;
  const newfamily = req.body.Familie;

  const foundpet = Pets.find((Pets) => Pets.id == id);
  foundpet.newfamily = newfamily;
  res.json(foundpet);
});

app.delete("/Pets/:id", (req, res) => {
  const id = req.params.id;
  const index = Pets.findIndex((user) => Pets.id == id);
  Pets.splice(index, 1);

  res.send(Pets);
});

app.listen(5050);
