const Iugu = require("../../models/Iugu");
const axios = require("axios");

class IuguController {
  async orderStatus(req, res) {
    console.log(req.body.data.id);

    const order = await axios.get(
      `https://api.iugu.com/v1/invoices/${req.body.data.id}`,
      {
        auth: {
          username: "4ea2c81b290db768caa43a16c08a51f9",
          password: null
        }
      }
    );

    console.log(order.data);

    const createOrder = await Iugu.create(order.data);

    // Create a new iugu order status
    const iugu = await Iugu.create(req.body);
    return res.json(iugu, createOrder);
  }
}

module.exports = new IuguController();
