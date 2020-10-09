const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        quantity: {
            type: String,
            required: true
        }

    },

    {
        timestamps: true,
    }

);

module.exports = mongoose.model("Product", ProductSchema);