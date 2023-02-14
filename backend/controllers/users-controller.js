const httpError = require("../utilities/http-error");
const { responseGenerator } = require("../utilities/response-generator");

class Users {
  static getAllUsers = (req, res, next) => {
    try {
      responseGenerator(
        res,
        201,
        [
          {
            id: 10,
            name: "Arabic",
            teacher_id: 4,
            teacher_name: "Ahmed Ismael",
            teacher_image: "1674493691_Ahmed Ismael.jpeg",
          },
          {
            id: 11,
            name: "English",
            teacher_id: 5,
            teacher_name: "ali",
            teacher_image: "1674493718_ali.jfif",
          },
          {
            id: 12,
            name: "biology",
            teacher_id: 4,
            teacher_name: "Ahmed Ismael",
            teacher_image: "1674493691_Ahmed Ismael.jpeg",
          },
          {
            id: 13,
            name: "chemistry",
            teacher_id: 5,
            teacher_name: "ali",
            teacher_image: "1674493718_ali.jfif",
          },
          {
            id: 14,
            name: "physics",
            teacher_id: 4,
            teacher_name: "Ahmed Ismael",
            teacher_image: "1674493691_Ahmed Ismael.jpeg",
          },
          {
            id: 15,
            name: "deutsch",
            teacher_id: 5,
            teacher_name: "ali",
            teacher_image: "1674493718_ali.jfif",
          },
        ],

        "users fetched successfully"
      );
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
      responseGenerator(res, 201, req.body, "user logged-in successfully");
    } catch (e) {
      next(new httpError(e.message || "could not login", 404));
    }
  };
}

module.exports = Users;
