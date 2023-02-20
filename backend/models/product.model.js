const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: Number, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  coordinates: { type: String, required: true },
  creator: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
