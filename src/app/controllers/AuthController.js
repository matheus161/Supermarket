const mongoose = require("mongoose");
const User = require("../models/User");
const auth = require("../middlewares/auth");

class AuthController {
    async store(req, res) {
        try {
            const { email, password } = req.body

            const user = User.findOne(email);

            if(!user){
                return res.status(400).json({ message: "Usuário não encontrado "});
            }

            if ((!await user.comparePassword(password))){
                return res.status(400).json({ message: "Senha Inválida"});
            }   

            return res.status(200).json({
                user,
                token: user.createToken()
            })


        } catch (error) {
            console.log(error)
            return res.status(500).json( { message: "Error interno do servidor "});
            
        }
    }
}

module.exports = new AuthController();