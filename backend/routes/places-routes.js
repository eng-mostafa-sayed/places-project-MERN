const router = require("express").Router();

const Places = require("../controllers/places-controller");

router.get("/", Places.getAllPlaces);
router.post("/", Places.createPlace);
router.get("/user/:id", Places.getPlacesByID);
router.patch("/:pid", Places.updatePlace);
router.get("/:pid", Places.getSinglePlace);
router.delete("/:pid", Places.deletePlace);

module.exports = router;
