const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    data: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", Order);
