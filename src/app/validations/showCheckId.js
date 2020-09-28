const { celebrate, Joi, Segments, isCelebrate } = require("celebrate");

const showCheckid = () => celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
    })

})

module.exports = showCheckid;