const mongoose = require("mongoose");

const Iugu = new mongoose.Schema(
  {
    any: Object
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Iugu", Iugu);
