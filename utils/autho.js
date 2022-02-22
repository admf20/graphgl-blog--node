const jwt = require('jsonwebtoken');

const createjwtToken = (user) => {
    return jwt.sign({user}, 'llave_secreta', {
        expiresIn: '1h'
    });
};

module.exports = {
    createjwtToken
};