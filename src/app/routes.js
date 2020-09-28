const express = require("express");
const routes = express.Router();
const auth = require("./middlewares/auth");

// -- Controllers 
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");



// -- User Routes
const storeUser = require("./validations/storeUser");
const showCheckid = require("./validations/showCheckId");

routes.get("/api/v1/users", UserController.index);
routes.post("/api/v1/users", storeUser(), UserController.store);
routes.get("/api/v1/users/:id", showCheckid(), UserController.show);

// Auth Routes
routes.post("/api/v1/authenticate", AuthController.store);
routes.post("/api/v1/forgot_password", AuthController.forgotPassword);
routes.post("/api/v1/reset_password", AuthController.reset_password);

module.exports = routes;