const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]
    
    try {
        const verified = jwt.verify(token, "llave_secreta")
        req.verifiedUser = verified.user
        next();

    } catch (error) {
        console.log(error);
        next();
    }
}

module.exports = {
    authentication
}