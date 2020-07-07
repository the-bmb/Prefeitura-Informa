const express = require("express");
const routes = express.Router();

const NotificationController = require("./controllers/NotificationController");
const UserController = require("./controllers/UserController");
//trás todas as notificações
routes.get("/notification", NotificationController.index);
//cria uma nova notificação
routes.post("/notification", NotificationController.store);
//login de usuário da prefeitura
routes.post("/login", UserController.index);
//trás os usuários que ainda não foram aprovados
routes.get("/toAprove", UserController.toAprove);
//cria um novo usuário
routes.post("/user", UserController.store);
//edita um usuário
routes.put("/user/:id", UserController.update);

module.exports = routes;
