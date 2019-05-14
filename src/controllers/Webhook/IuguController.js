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
          username: "4ea2c81b290db768caa43a16c08a51f9",
          password: null
        }
      }
    );

    await Order.create(order.data);
    await Iugu.create(req.body);

    return res.json('Order created');
  }
}

module.exports = new IuguController();
