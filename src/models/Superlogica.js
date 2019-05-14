const mongoose = require("mongoose");

const Superlogica = new mongoose.Schema(
  {
    data: {}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Superlogica", Superlogica);
