const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();
const PORT = 5001;

//middleware
app.use(bodyParser.json());

app.use("/api/places", placeRoutes);
app.use("/api/users", usersRoutes);

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
