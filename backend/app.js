const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/DB.connections");

const placeRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const httpError = require("./utilities/http-error");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));

app.use("/api/places", placeRoutes);
app.use("/api/users", usersRoutes);

//handel unknown routes
app.use((req, res, next) => {
  const error = new httpError("could not find this route", 404);
  throw error;
});

//default error handler
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
