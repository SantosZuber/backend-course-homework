const express = require("express");
const handlebars = require("express-handlebars");
const { productos, contenedor } = require("./modules/products");
const app = express();
let prods = contenedor.getAll();
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/productos", (req, res) => {
  let prods = contenedor.getAll();
  if (prods.length >= 1) {
    res.render("productos", { prods });
  } else {
    res.send("No hay productos");
  }
});

app.post("/productos", (req, res) => {
  contenedor.save(req.body.postprod);
  res.redirect("/");
});

app.listen(8090);
