const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    data: {
        type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", Order);
