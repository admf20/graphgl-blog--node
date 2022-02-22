const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        match: [
            /.+\@.+\..+/,
            "Por favor ingrese un correo valido"
        ]
    },
    password: {
        type: 'string',
        required: true,
        select: false //para que no me retorne la contraseña
    },
    displayName: {
        type: 'string',
        required: true,
        
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);