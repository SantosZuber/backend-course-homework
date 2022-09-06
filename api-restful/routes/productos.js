const { Router } = require("express");
const { productos, contenedor } = require("../modules/products");

const router = Router();

router.get("/api/productos", (req, res) => {
  res.json(productos);
});

router.post("/api/productos", (req, res) => {
  contenedor.save(req.body);
});

module.exports = router;
