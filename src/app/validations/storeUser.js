const { celebrate, Joi, Segments, isCelebrate} = require("celebrate");

const storeUser = () => celebrate({
    [Segments.BODY]:Joi.object().keys({
        //Validando login, email, password and permissions
        login: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(), 
        permissions: Joi.string().required(),
        passwordResetToken: Joi.string(),
        passwordResetExpires: Joi.date()
    })
})

module.exports = storeUser;