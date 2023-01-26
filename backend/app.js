const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/places-routes");
//const usersRoutes = require("routes/users-routes");

const app = express();
const PORT = 5001;

//middleware
app.use(bodyParser);

app.use("/api/places", placeRoutes);
//app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
