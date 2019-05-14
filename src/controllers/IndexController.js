class IndexController {
  async index(req, res) {
    return await res.json('teste');
  }
}

module.exports = new IndexController();
