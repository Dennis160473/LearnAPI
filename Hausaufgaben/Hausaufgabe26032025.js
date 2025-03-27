const express = require("express");
const sillyname = require("sillyname");
const app = express();

app.get("/randomname", (req, res) => {
  res.send("Welchen Namen gibst Du mir!");
});

app.get("/randomname", (req, res) => {
  res.json([
    { id: 1, name: "" },
    { id: 2, name: "" },
  ]);
});

app.listen(5012, () => {
  console.log("Server läuft auf http://localhost:5012&quot;");
});
