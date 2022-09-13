const express = require("express");
require("ejs");
const { productos, contenedor } = require("./modules/products");
const app = express();
let prods = contenedor.getAll();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/productos", (req, res) => {
  let prods = contenedor.getAll();
  res.render("productos", { prods });
});

app.post("/productos", (req, res) => {
  contenedor.save(req.body.postprod);
  res.redirect("/");
});

app.listen(8080);
