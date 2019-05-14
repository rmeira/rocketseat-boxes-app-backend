const Superlogica = require("../../models/Superlogica");
const axios = require('axios')

class SuperlogicaController {
  async orderStatus(req, res) {
    console.log(req.body)

    // Create a new superlogica order status
    const superlogica = await Superlogica.create(req.body);
    return res.json(superlogica);
    
  }
}

module.exports = new SuperlogicaController();
