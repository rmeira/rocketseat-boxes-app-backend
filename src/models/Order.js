const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", Order);
