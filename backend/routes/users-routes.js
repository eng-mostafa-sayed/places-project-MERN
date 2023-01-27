const router = require("express").Router();

const Users = require("../controllers/users-controller");

router.get("/", Users.getAllUsers);
router.post("/", Users.signup);
router.post("/", Users.login);

module.exports = router;
