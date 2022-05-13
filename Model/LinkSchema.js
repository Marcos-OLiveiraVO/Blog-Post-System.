const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, minLength: 3, maxLength: 50, required: true },
  description: { type: String, minLength: 5, maxLength: 2000, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model("postSchema", schema);
