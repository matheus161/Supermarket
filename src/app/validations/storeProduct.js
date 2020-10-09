const { celebrate, Joi, Segments, isCelebrate} = require("celebrate");

const storeUser = () => celebrate({
    [Segments.BODY]:Joi.object().keys({
        //Validando name, price, quantity
        name: Joi.string().required(),
        price: Joi.string().required(),
        quantity: Joi.string().required()
    })
})

module.exports = storeUser;