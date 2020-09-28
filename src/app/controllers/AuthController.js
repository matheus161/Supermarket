const User = require("../models/User");
const crypto = require("crypto");
const mailer = require("../modules/mailer");

class AuthController {
    async store(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: "Usuário não encontrado " });
            }

            if (!(await user.comparePassword(password))) {
                return res.status(400).json({ message: "Senha Inválida" });
            }

            return res.status(200).json({
                user,
                token: user.createToken()
            })


        } catch (error) {
            return res.status(500).json({ message: "Error interno do servidor " });

        }
    }

    async forgotPassword(req, res) {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: "Usuário não encontrado" });
            }

            // Vou gerar um token que funcione apenas para esse usuário
            const token = crypto.randomBytes(20).toString('hex');

            // pegando data de agora e acrescentando uma hora para expirar
            const now = new Date();
            now.setHours(now.getHours() + 1);

            await User.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now,
                }
            });
            console.log(token);
            mailer.sendMail({
                to: email,
                from: 'supermarket@email.com',
                template: 'auth/forgot_password',
                context: { token },
            }, (err) => {
                if (err)
                    
                return res.status(400).json({ message: "Cannot send forgot password email" });

                return res.send();
            });


        } catch (error) {
            res.status(500).json({ message: "Error on forgot password, try again " });
        }
    }

    async reset_password(req, res) {
        try {
            const { email, token, password } = req.body;

            const user = await User.findOne({ email })
                .select('+passwordResetToken passwordResetExpires');       
                
            if (!user)
                return res.status(400).send({ error: 'User not found' });    
            
            if(token !== user.passwordResetToken)
                return res.status(400).send({ error: 'Token Invalid' });

            // Verifica se o Token não está expirado     
            const now = new Date();                  
            if (now > user.passwordResetExpires)
                return res.status(400).send({ error: 'Token epired, generate a new one' });
            
            user.password = password

            await user.save();
            
            res.send();
        } catch (error) {
            res.status(400).send({ error: 'Cannot reset password, try again '});
        }
    }

}


module.exports = new AuthController();