const Superlogica = require("../../models/Superlogica");
const axios = require('axios')

class SuperlogicaController {
  async orderStatus(req, res) {
    console.log(req)
    return await res.json("teste");
  }
}

module.exports = new SuperlogicaController();
