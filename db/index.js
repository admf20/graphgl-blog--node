const mongoose = require('mongoose');

const conexion = async () => {
    await mongoose.connect('mongodb://localhost/blog__graphql');
    console.log('Base de datos conectada, mongodb');
};

module.exports = conexion;