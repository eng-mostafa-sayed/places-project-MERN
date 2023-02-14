const router = require("express").Router();
const { check } = require("express-validator");

const Places = require("../controllers/places-controller");

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  Places.createPlace
);
router.get("/user/:id", Places.getPlacesByUserID);
router.patch(
  "/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  Places.updatePlace
);
router.get("/:pid", Places.getPlacesByID);
router.delete("/:pid", Places.deletePlace);

module.exports = router;
