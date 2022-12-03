const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/gdg", (req, res) => {
  res.send("Here we go againn!");
});

const port = 3000;
const server = app.listen(port, () => {
  console.log("listening on port %s.\n", server.address().port);
});

module.exports = app;
