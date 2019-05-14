const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    any: Object
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", Order);
