const httpError = require("../utilities/http-error");
const { responseGenerator } = require("../utilities/response-generator");
const { validationResult } = require("express-validator");
const getCoordsForAddress = require("../utilities/location");
const places = require("../models/place.model");
class Places {
  static createPlace = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError("Invalid inputs passed, please check your data.", 422)
      );
    }

    const { title, description, address, creator } = req.body;

    let coordinates;
    try {
      coordinates = await getCoordsForAddress(address);
    } catch (error) {
      return next(error);
    }

    // const title = req.body.title;
    const createdPlace = new Place({
      title,
      description,
      address,
      location: coordinates,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg",
      creator,
    });

    try {
      await createdPlace.save();
      responseGenerator(res, 201, createdPlace, "place Created successfully");
    } catch (err) {
      const error = new HttpError(
        "Creating place failed, please try again.",
        500
      );
      return next(error);
    }

    res.status(201).json({ place: createdPlace });
  };
  static getPlacesByUserID = (req, res, next) => {
    try {
      const id = req.params.id;
      responseGenerator(res, 201, id, "places fetched successfully");
    } catch (e) {
      next(new httpError(e.message || `could not get places for ${id}`, 404));
    }
  };

  static updatePlace = (req, res, next) => {
    try {
      if (!errors.isEmpty()) {
        throw new httpError("invalid inputs passed to createPlace", 442);
      }
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, "place updated successfully");
    } catch (e) {
      next(new httpError(e.message || "could not update a place", 404));
    }
  };
  static getPlacesByID = (req, res, next) => {
    try {
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, "place fetched successfully");
    } catch (e) {
      next(new httpError(e.message || "could not get the place", 404));
    }
  };
  static deletePlace = (req, res, next) => {
    try {
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, "place deleted successfully");
    } catch (e) {
      next(new httpError(e.message || "could not delete the place", 404));
    }
  };
}

module.exports = Places;
