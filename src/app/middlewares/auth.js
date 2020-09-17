const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next ) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
       return res.status(401).json({ message: "Sem Token" }); 
    }

    // Split retorna um Vetor
    const [ schema, token ] = authorization.split(" ")

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        return next();
        
    } catch (error) {
        return res.status(401).json({ message: "Token Inválido "});
    }
}