const httpError = require("../utilities/http-error");
const { responseGenerator } = require("../utilities/response-generator");

class Places {
  static getAllPlaces = (req, res, next) => {
    try {
      responseGenerator(res, 201, req.body, "All places fetched successfully");
    } catch (e) {
      next(new httpError(e.message || "could not fetch  places", 404));
    }
  };
  static getPlacesByID = (req, res, next) => {
    try {
      const id = req.params.id;
      responseGenerator(res, 201, id, "places fetched successfully");
    } catch (e) {
      next(new httpError(e.message || `could not get places for ${id} `, 404));
    }
  };
  static createPlace = (req, res, next) => {
    try {
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, " place Created successfully");
    } catch (e) {
      next(new httpError(e.message || "could not create a place ", 404));
    }
  };
  static updatePlace = (req, res, next) => {
    try {
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, " place updated successfully");
    } catch (e) {
      next(new httpError(e.message || "could not update a place ", 404));
    }
  };
  static getSinglePlace = (req, res, next) => {
    try {
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, " place fetched successfully");
    } catch (e) {
      next(new httpError(e.message || "could not get the place", 404));
    }
  };
  static deletePlace = (req, res, next) => {
    try {
      const { title, description, coordinates, address, creator } = req.body;
      responseGenerator(res, 201, req.body, " place deleted successfully");
    } catch (e) {
      next(new httpError(e.message || "could not delete the place", 404));
    }
  };
}

module.exports = Places;
