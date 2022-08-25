const fs = require('fs');
const arr = [];
class Contenedor {
    constructor() {

    }
    save(obj) {
        arr.push(obj)
        console.log(arr)
        for (let i = 0; i <= arr.length; i++) {
            fs.appendFile("productos.txt", arr[i].qew, (err) => { //Problema al recibir un objeto.
                if (err) {
                    console.log("err")
                }
            })
        }
    }
    getById(num) {

    }
    getAll() {
        let array = [];
        fs.readFile("productos.txt", "utf-8", (err, data) => {
            if (err) {
                console.log("err")
            } else {
                array.push(data)
                return array;
            }
        });
    }
    deleteById() {

    }
    deleteAll() {

    }
}

let hola = new Contenedor();
hola.save({ qew: "sau" });
hola.getAll()
