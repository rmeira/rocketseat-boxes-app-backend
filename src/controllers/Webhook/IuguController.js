const Iugu = require("../../models/Iugu");
const axios = require("axios");

class IuguController {
  async orderStatus(req, res) {
    console.log(req.body.data.id);

    const order = await axios.get(`https://api.iugu.com/v1/invoices/${req.body.data.id}`);

    console.log(order)

    const createOrder = await Iugu.create(order);

    // Create a new iugu order status
    const iugu = await Iugu.create(req.body);
    return res.json(iugu, createOrder);
  }
}

module.exports = new IuguController();
