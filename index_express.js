const express = require("express");
const moment = require("moment");
const app = express();
const PORT = 3007;
let contador = 0;

app.get("/", (req, res, next) => {
  console.log(req);
  res.send(`<h1 style="color:blue">Hola Bienvenido<h2>`);
});

app.get("/visitas", (req, res, next) => {
  contador++;
  res.send(`Has entrado ${contador} veces`);
});

app.get("/fyh", (req, res, next) => {
  console.log(req);
  res.json({ fyh: moment().format("DD/MM/YYYY HH:mm:ss") });
});

const server = app.listen(PORT, () => {
  console.log(`Server on localhost:${PORT}`);
});

server.on("error", (error) => console.log(error));
