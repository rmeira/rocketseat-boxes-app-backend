const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    data: null
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", Order);
