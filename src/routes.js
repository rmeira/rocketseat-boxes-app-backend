const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const IndexController = require("./controllers/IndexController")

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

const IuguController = require("./controllers/Webhook/IuguController")
const SuperlogicaController = require('./controllers/Webhook/SuperlogicaController');

routes.get("/", IndexController.index);

routes.post("/iugu/webhook/order-status", IuguController.orderStatus)
routes.post("/superlogica/webhook/order-status", SuperlogicaController.orderStatus)

routes.get("/boxes", BoxController.index);
routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single("file"), FileController.store);

module.exports = routes;
