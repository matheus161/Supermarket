const express = require("express");
const routes = express.Router();
const auth = require("./middlewares/auth");
const swaggerUi = require("swagger-ui-express");

// -- Controllers 
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const ProductController = require("./controllers/ProductController")
const docs = require("../docs/swagger.json");

// -- Showing the documentation
routes.use("/api/v1/", swaggerUi.serve);
routes.get("/api/v1/", swaggerUi.setup(docs));

// -- User Routes
const storeUser = require("./validations/storeUser");
const showCheckid = require("./validations/showCheckId");

routes.get("/api/v1/users", UserController.index);
routes.post("/api/v1/users", storeUser(), UserController.store);
routes.get("/api/v1/users/:id", showCheckid(), UserController.show);

// -- Product Routes
const storeProduct = require("./validations/storeProduct");

routes.get("/api/v1/products", ProductController.index);
routes.post("/api/v1/products", storeProduct(),  ProductController.store);
routes.get("/api/v1/products/:id", ProductController.show);
routes.put("/api/v1/products/:id", ProductController.update);
routes.delete("/api/v1/products/:id", auth,  ProductController.destroy);

// Auth Routes
routes.post("/api/v1/authenticate", AuthController.store);
routes.post("/api/v1/forgot_password", AuthController.forgotPassword);
routes.post("/api/v1/reset_password", AuthController.reset_password);

module.exports = routes;