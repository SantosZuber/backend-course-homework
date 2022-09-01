const fs = require("fs");
const productos = JSON.parse(
  fs.readFileSync("./modules/productos.json", "utf-8")
);
class Contenedor {
  constructor() {}
  save(obj) {
    let lastElement = productos[productos.length - 1];
    console.log(lastElement);
    if (productos.length > 0) {
      idCounter = lastElement.id + 1;
    } else {
      idCounter = 1;
    }
    obj.id = idCounter;
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    productos.push(obj);
    fs.writeFileSync("productos.json", JSON.stringify(productos));
    return idCounter;
  }
  getById(id) {
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    productos.filter((e) => {
      if (e.id == id) {
        return e;
      } else {
        return null;
      }
    });
  }
  getAll() {
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    return productos;
  }
  deleteById(id) {
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    productos.forEach((e) => {
      if (e.id == id) {
        let index = productos.indexOf(e);
        productos.splice(index, 1);
        console.log(productos);
        return;
      } else {
        return;
      }
    });
    fs.writeFileSync("./modules/productos.json", JSON.stringify(productos));
  }
  deleteAll() {
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    productos.splice(0, productos.length);
    fs.writeFileSync("./modules/productos.json", JSON.stringify(productos));
  }
}
const contenedor = new Contenedor();
module.exports = productos;
