const fs = require("fs");
let productos = JSON.parse(
  fs.readFileSync("./modules/productos.json", "utf-8")
);
class Contenedor {
  constructor() {}
  save(obj) {
    let idCounter;
    if (productos.length > 0) {
      idCounter = productos.length + 1;
    } else {
      idCounter = 1;
    }
    obj = JSON.parse(obj);
    obj.id = idCounter;
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    productos.push(obj);
    console.log(productos);
    fs.writeFileSync("./modules/productos.json", JSON.stringify(productos));
    return obj, idCounter;
  }
  getById(id) {
    productos = JSON.parse(
      fs.readFileSync("./modules/productos.json", "utf-8")
    );
    let response = productos.filter((e) => {
      if (e.id == id) {
        return e;
      }
    });
    if (response[0] === undefined) {
      return null;
    } else {
      return response;
    }
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
  put(id, obj) {
    fs.readFileSync("./modules/productos.json", "utf-8");
    productos = productos.map((e) => (e.id == id ? { ...e, ...obj } : e));
    fs.writeFileSync("./modules/productos.json", JSON.stringify(productos));
  }
}
const contenedor = new Contenedor();
module.exports = {
  productos,
  contenedor,
};
