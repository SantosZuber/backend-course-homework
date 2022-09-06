const express = require("express");

const Ids = require("./routes/ids");
const Productos = require("./routes/productos");
const Form = require("./routes/form");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./static"));

app.use(Ids);
app.use(Productos);
app.use(Form);

const server = app.listen(8080, () => {
  console.log(`Servidor iniciado en el puerto ${8080}`);
});
