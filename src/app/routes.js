const express = require("express");
const routes = express.Router();
const auth = require("./middlewares/auth");
const { celebrate, Joi, Segments, isCelebrate} = require("celebrate");


const UserController = require("./controllers/UserController");
const User = require("./models/User");



// -- User Routes
routes.get("/api/v1/users", UserController.index);
routes.post("/api/v1/users", celebrate({
    [Segments.BODY]:Joi.object().keys({
        //Validando login, email, password and permissions
        login: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(), 
        permissions: Joi.string().required(),
    })
}), UserController.store);
routes.get("/api/v1/users/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), UserController.show);
