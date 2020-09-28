const mongoose = require("mongoose");
const User = require("../models/User");

class UserController {
    async show(req, res) {
        try {
            const id = req.params.id

            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado " });
            }

            return res.status(200).json(user);

        } catch (error) {

            return res.status(500).json({ message: "Error Interno do Servidor " });
        }
    }

    async index(req, res) {
        try {
            const users = await User.find({});

            return res.status(200).json(users);

        } catch (error) {
            return res.status(500).json({ message: "Error interno do Servidor " });
        }
    }

    async store(req, res) {
        try {
            const { login, email, password, permissions, } = req.body;
            const checkEmail = await User.findOne({ email: email });

            if(checkEmail) {
                return res.status(409).json({ message: "Email já existente"})
            }

            const user = await User.create({
                login,
                email,
                password,
                permissions
            });
            user.password = undefined;
            return res.status(201).json(user);

        } catch ( error) {

        }
    }
}

module.exports = new UserController();