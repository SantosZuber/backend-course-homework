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
    defaultLayout: "index",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main", {
    layouts: "index",
  });
});

app.get("/productos", (req, res) => {
  res.render("main", {
    layouts: "productos",
  });
});

app.post("/productos", (req, res) => {
  contenedor.save(req.body.postprod);
  res.redirect("/");
});

app.listen(8080);
