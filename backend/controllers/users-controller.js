const httpError = require("../utilities/http-error");
const { responseGenerator } = require("../utilities/response-generator");

class Users {
  static getAllUsers = (req, res, next) => {
    try {
      responseGenerator(res, 201, req.body, "users fetched successfully");
    } catch (e) {
      next(new httpError(e.message || "could not fetch users", 404));
    }
  };
  static signup = (req, res, next) => {
    try {
      const user = req.body;
      responseGenerator(res, 201, req.body, "user created successfully");
    } catch (e) {
      next(new httpError(e.message || "could not create a user", 404));
    }
  };
  static login = (req, res, next) => {
    try {
      const user = req.body;
      responseGenerator(res, 201, req.body, " user logged-in successfully");
    } catch (e) {
      next(new httpError(e.message || "could not login", 404));
    }
  };
}

module.exports = Users;
