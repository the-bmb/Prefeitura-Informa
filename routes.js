const express = require("express");
const routes = express.Router();

const NotificationController = require("./controllers/NotificationController");
const UserController = require("./controllers/UserController");
routes.get("/notification", NotificationController.index);
routes.post("/notification", NotificationController.store);
routes.post("/login", UserController.index);
routes.post("/user", UserController.store);
module.exports = routes;
