const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello" });
});
module.exports = router;
