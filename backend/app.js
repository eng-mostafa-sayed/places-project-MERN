const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001;

//middleware
app.use(bodyParser);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
