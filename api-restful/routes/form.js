const { Router } = require("express");

const router = Router();

router.get("/form", (req, res) => {
  const { get_prod_id } = req.body; //Devuelve undefined
  console.log();
});

module.exports = router;
