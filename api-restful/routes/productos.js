const { Router } = require("express");
const { productos, contenedor } = require("../modules/products");

const router = Router();

router.get("/api/productos", (req, res) => {
  res.json(productos);
});

router.post("/api/productos", (req, res) => {
  contenedor.save(req.body);
  //No funciona, siempre da undefined
  console.log(req.body.get_prod_id);
  // res.redirect(`/api/productos/${req.body.get_prod_id}`);
});

module.exports = router;
