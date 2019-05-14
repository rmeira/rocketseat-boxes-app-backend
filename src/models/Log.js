const mongoose = require("mongoose");

const Log = new mongoose.Schema(
  {
    data: Object
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Log", Log);
