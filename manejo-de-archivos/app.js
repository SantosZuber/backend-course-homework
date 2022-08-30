const fs = require("fs");
let reading = [];
let idCounter;

try {
  JSON.parse(fs.readFileSync("productos.json", "utf-8"));
} catch {
  fs.writeFileSync("productos.json", JSON.stringify(reading));
}

class Contenedor {
  constructor() {}
  save(obj) {
    let lastElement = reading[reading.length - 1];
    console.log(lastElement);
    if (reading.length > 0) {
      idCounter = lastElement.id + 1;
    } else {
      idCounter = 1;
    }
    obj.id = idCounter;
    reading = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    reading.push(obj);
    fs.writeFileSync("productos.json", JSON.stringify(reading));
    return idCounter;
  }
  getById(id) {
    reading = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    reading.filter((e) => {
      if (e.id == id) {
        return e;
      } else {
        return null;
      }
    });
  }
  getAll() {
    reading = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    return reading;
  }
  deleteById(id) {
    reading = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    reading.forEach((e) => {
      if (e.id == id) {
        let index = reading.indexOf(e);
        reading.splice(index, 1);
        console.log(reading);
        return;
      } else {
        return;
      }
    });
    fs.writeFileSync("productos.json", JSON.stringify(reading));
  }
  deleteAll() {
    reading = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    reading.splice(0, reading.length);
    fs.writeFileSync("productos.json", JSON.stringify(reading));
  }
}
let contenedor = new Contenedor();
//contenedor.deleteAll();
//console.log(contenedor.save({ title: "test", price: 100, thumbnail: null }));
//console.log(contenedor.save({ title: "test", price: 100, thumbnail: null }));
//console.log(contenedor.save({ title: "test", price: 100, thumbnail: null }));
//console.log(contenedor.getById(1));
//console.log(contenedor.getAll());
//contenedor.deleteById(2);
