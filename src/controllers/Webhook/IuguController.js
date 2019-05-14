const Iugu = require("../models/Iugu");
const axios = require('axios')

class IuguController {

  async orderStatus(req, res) {
      console.log(req)
    return await res.json("teste");
  }
}

module.exports = new IuguController();
