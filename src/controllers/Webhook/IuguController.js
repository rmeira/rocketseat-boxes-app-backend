const Iugu = require("../../models/Iugu");
const axios = require("axios");

class IuguController {
  async orderStatus(req, res) {
    console.log(req.body);

    // Create a new iugu order status
    const iugu = await Iugu.create(req.body);
    return res.json(iugu);
  }
}

module.exports = new IuguController();
