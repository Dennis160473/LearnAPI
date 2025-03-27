const express = require("express");
const app = express();

const pets = [
  {
    id: 1,
    Art: "Löwe",
    Stamm: "Wirbeltiere",
    Klasse: "Säugetiere",
    Ordnung: "Raubtiere",
    Familie: "Katzen",
    Gattung: "Großkatzen",
  },
  {
    id: 2,
    Art: "Wildrind",
    Stamm: "Wirbeltiere",
    Klasse: "Säugetiere",
    Ordnung: "Paarhufer",
    Familie: "Hornträger",
    Gattung: "Eigentliche Rinder",
  },
  {
    id: 3,
    Art: "Weißer Hai",
    Stamm: "Wirbeltiere",
    Klasse: "Fische",
    Ordnung: "Markrelenhaiartige",
    Familie: "Markrelenhaie",
    Gattung: "Carcharodon",
  },
  {
    id: 4,
    Art: "Anaconda",
    Stamm: "Wirbeltiere",
    Klasse: "Reptilien",
    Ordnung: "Schlange",
    Familie: "Boas",
    Gattung: "Eunectes",
  },
  {
    id: 5,
    Art: "Skorpion",
    Stamm: "Gliederfüßer",
    Klasse: "Spinnentiere",
    Ordnung: "Skorpione",
    Familie: "Scorpionidae",
    Gattung: "Scorpio",
  },
  {
    id: 6,
    Art: "Pelikan",
    Stamm: "Wirbeltiere",
    Klasse: "Vögel",
    Ordnung: "Ruderfüßer",
    Familie: "Pelikane",
    Gattung: "Pelikane",
  },
];

app.get("/pets/", (req, res) => {
  res.send(req.query);
});

app.get("/pets/:id", (req, res) => {
  const id = req.params.id;
  const foundpet = pets.find((pets) => pets.id == id);

  if (foundpet) {
    res.json(foundpet);
  } else {
    res
      .status(404)
      .send("Kein Tier mit der ID in der Datenbank gefunden. ID: " + id);
  }
});

app.get("/pets/search", (req, res) => {
  const Art = req.query.Artrt;
  const result = pets.filter((pets) => pets.Art == Art);
  res.json(result);
});

app.post("/pets", (req, res) => {
  const { Art, Stamm, Klasse, Ordnung, Familie, Gattung } = req.body; // Destructuring
  const newPet = {
    id: pets.length + 1,
    Art: Art,
    Stamm: Stamm,
    Klasse: Klasse,
    Ordnung: Ordnung,
    Familie: Familie,
    Gattung: Gattung,
  };

  pets.push(newPet);

  res.json(pets);
});

app.listen(5050);
