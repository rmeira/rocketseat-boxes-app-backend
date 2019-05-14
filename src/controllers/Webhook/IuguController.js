const Iugu = require("../../models/Iugu");
const Order = require("../../models/Order");
const axios = require("axios");

class IuguController {
  async orderStatus(req, res) {
    console.log(req.body.data.id);

    const order = await axios.get(
      `https://api.iugu.com/v1/invoices/${req.body.data.id}`,
      {
        auth: {
          username: process.env.IUGU_KEY,
          password: null
        }
      }
    );

    console.log(JSON.parse(order.data));

    await Order.create(JSON.parse(order.data));
    await Iugu.create(req.body);

    return res.json('Order created');
  }
}

module.exports = new IuguController();
