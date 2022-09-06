const { Router } = require("express");
const { productos, contenedor } = require("../modules/products");

const router = Router();

router.get("/api/productos", (req, res) => {
  //No funciona, siempre da undefined
  console.log(req.body.get_prod_id);
  // res.redirect(`/api/productos/${req.body.get_prod_id}`);
});

router.post("/api/productos", (req, res) => {
  res.json(contenedor.save(req.body.post_prod));
});

module.exports = router;
