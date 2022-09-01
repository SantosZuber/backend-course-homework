const express = require("express");
const app = express();
const productos = require("./modules/products");
app.get("/", (req, res) => {
  res.send("Inicio");
});
app.get("/productos", (req, res) => {
  res.send(productos);
});

app.get("/productoRandom", (req, res) => {
  res.send(productos[Math.floor(Math.random() * productos.length)]);
});

const server = app.listen(8080, () => {
  console.log(`Servidor iniciado en el puerto ${8080}`);
});
