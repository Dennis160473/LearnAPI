const sillyname = require("sillyname");
const app = sillyname();

app.get("/randomname", (req, res) => {
  res.send("Welchen Namen gibst Du mir!");
});

app.listen(3000);
