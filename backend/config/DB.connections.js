const mongoose = require("mongoose");
try {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.dbName)
    .then(console.log("Connected to DB ✔️✔️"));
} catch (e) {
  console.log("database connection error: ❌❌ \n" + e.message);
}
