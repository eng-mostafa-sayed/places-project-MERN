const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const httpError = require("./utilities/http-error");

const app = express();
const PORT = 5001;

//middleware
app.use(bodyParser.json());

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
