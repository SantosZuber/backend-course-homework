const { Router } = require("express");
const { contenedor } = require("../modules/products");

const router = Router();

router.get("/api/productos/:id", (req, res) => {
  if (contenedor.getById(req.params.id) === null) {
    res.json({ error: "producto no encontrado" });
  } else {
    res.json(contenedor.getById(req.params.id));
  }
});

router.put("/api/productos/:id", (req, res) => {
  if (contenedor.getById(req.params.id) === null) {
    res.json({ error: "producto no encontrado" });
    res.sendStatus(404);
  } else {
    contenedor.put(req.params.id, req.body);
    res.sendStatus(204);
  }
});

router.delete("/api/productos/:id", (req, res) => {
  if (contenedor.getById(req.params.id) === null) {
    res.json({ error: "producto no encontrado" });
    res.sendStatus(404);
  } else {
    contenedor.deleteById(req.params.id);
    res.sendStatus(204);
  }
});

module.exports = router;
