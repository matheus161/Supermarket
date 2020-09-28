const express = require("express");
const database = require("./database/database");
const routes = require("./app/routes");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


module.exports = app;