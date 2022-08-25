const fs = require('fs');
const arr = [];
class Contenedor {
    constructor() {

    }
    async save(obj) {
        arr.push(obj)
        console.log(arr)
        for (let i = 0; i <= arr.length; i++) {
            await fs.appendFile("productos.txt", arr[i].testprop, (err) => { //Problema al recibir un objeto.
                if (err) {
                    console.log("err")
                }
            })
        }
    }
    getById(num) {

    }
    async getAll() {
        let array = [];
        await fs.readFile("productos.txt", "utf-8", (err, data) => {
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

let contenedor = new Contenedor();
contenedor.save({ testprop: "text" });
contenedor.getById();
contenedor.getAll();
contenedor.deleteById();
contenedor.deleteAll();