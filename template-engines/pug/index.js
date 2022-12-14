const express = require("express");
const { productos, contenedor } = require("./modules/products");
const app = express();
let prods = contenedor.getAll();
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.get("/productos", (req, res) => {
  let prods = contenedor.getAll();
  if (prods.length >= 1) {
    res.render("productos.pug", { prods });
  } else {
    res.send("No hay productos");
  }
});

app.post("/productos", (req, res) => {
  contenedor.save(req.body.postprod);
  res.redirect("/");
});

app.listen(8080);
