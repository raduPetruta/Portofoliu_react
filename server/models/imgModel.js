const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  title: String,
  url: String,
  type: String
});

const ImageModel = mongoose.model("pozeColl", imgSchema);
module.exports = ImageModel;
