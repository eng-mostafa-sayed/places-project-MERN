const router = require("express").Router();

const httpError = require("../utilities/http-error");
const { responseGenerator } = require("../utilities/response-generator");

router.get("/", (req, res, next) => {
  //res.json({ message: "Hello" });
  responseGenerator(res, 201, { new: "hello" }, "done successfully");
  next(new httpError("could not find a place for a provided user id", 404));
});
module.exports = router;
