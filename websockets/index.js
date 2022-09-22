const { Server: HTTPServer } = require("http");
const express = require("express");
const { Server: SocketServer } = require("socket.io");

const app = express();
const httpServer = HTTPServer(app);
const io = new SocketServer(httpServer);
const handlebars = require("express-handlebars");
const fs = require("fs");

const { productos, contenedor } = require("./modules/products");
let prods = contenedor.getAll();
let mensajes = JSON.parse(fs.readFileSync("./mensajes.json", "utf-8"));

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
app.use(express.static("views"));

app.set("view engine", "hbs");
app.set("views", "views");

function validateUsername(data) {
  if (data.includes("<", ">", "*", "/")) {
    data = "Hacker";
  } else if (data.includes(" ")) {
    data = "Hacker";
  } else if (data === null) {
    data = "Hacker";
  }
}
function validateMsg(data) {
  if (data.includes("<", ">", "*", "/")) {
    data = "There was an error on this message";
  } else if (data === null) {
    data = "There was an error on this message";
  }
}

function saveMessage(data) {
  mensajes = JSON.parse(fs.readFileSync("./mensajes.json", "utf-8"));
  mensajes.push(data)
  fs.writeFileSync("./mensajes.json", JSON.stringify(mensajes));
}

io.on("connection", (socket) => {
  let myUser = {};
  myUser.id = socket.id;
  socket.emit("ping", prods, mensajes);
  socket.on("message", (username, message) => {
    validateUsername(username);
    validateMsg(message.text);
    message.username = username;
    saveMessage(message)
    io.sockets.emit("newmsg", mensajes);
  });
});

app.get("/", (req, res) => {
  prods = contenedor.getAll();
  if (prods.length >= 1) {
    res.render("index", { prods });
  } else {
    prods = null;
    res.render("index", { prods });
  }
});

app.post("/productos", (req, res) => {
  contenedor.save(`{
    "title": "${req.body.post_name}",
    "price": "${req.body.post_price}",
    "thumbnail": "${req.body.post_image}"
  }`);
  prods = contenedor.getAll();
  io.sockets.emit("newprod", prods);
  res.redirect("/");
});

httpServer.listen(8080, () => {
  console.log("Server open, port: ", 8080);
});
