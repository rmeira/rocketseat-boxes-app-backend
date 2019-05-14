const mongoose = require("mongoose");

const Iugu = new mongoose.Schema(
  {
    data: Object
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Iugu", Iugu);
