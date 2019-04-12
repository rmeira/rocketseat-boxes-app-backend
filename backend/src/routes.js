const express = require('express');
const routes = express.routes();

routes.get('/', (req, res) => {
    return res.send("Hello World");
})

module.exports = routes; 