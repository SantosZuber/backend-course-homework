const fs = require("fs");
const express = require("express");
const { productos, contenedor } = require("./modules/products");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/api/productos", (req, res) => {
  res.json(productos);
});

app.get("/api/productos/:id", (req, res) => {
  if (contenedor.getById(req.params.id) === null) {
    res.send(`No se ha encontrado un producto con el id ${req.params.id}`);
  } else {
    res.json(contenedor.getById(req.params.id));
  }
});

app.post("/api/productos", (req, res) => {
  res.json(contenedor.save(req.body));
});

app.put("/api/productos/:id", (req, res) => {
  if (contenedor.getById(req.params.id) === null) {
    res.status(404).json({
      message: `No se ha encontrado un producto con el id ${req.params.id}`,
    });
  } else {
    contenedor.put(req.params.id, req.body);
    res.sendStatus(204);
  }
});

app.delete("/api/productos/:id", (req, res) => {
  if (contenedor.getById(req.params.id) === null) {
    res.status(404).json({
      message: `No se ha encontrado un producto con el id ${req.params.id}`,
    });
  } else {
    contenedor.deleteById(req.params.id);
    res.sendStatus(204);
  }
});

const server = app.listen(8080, () => {
  console.log(`Servidor iniciado en el puerto ${8080}`);
});
