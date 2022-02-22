const { GraphQLString } = require("graphql");
const { User, Post } = require("../models");
const { createjwtToken } = require("../utils/autho");
const { PostType } = require("./types");

const register = {
    type: GraphQLString,
    description: "esta mutacion crea un usuario",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }
    },
    async resolve(_,args) {
        
        const { username, email, password, displayName } = args;

        const newUser = new User({
            username,
            email,
            password,
            displayName
        });

        const user = await newUser.save(); //Creamos el usuario
        const token = createjwtToken(user); //Creamos el token
        
        console.log(`
        datos de usuario; usuario: ${newUser}
        token del usuario; token: ${token}`);

        return "Nuevo usuario creado"
    },
};

const login = {
    type: GraphQLString,
    description: "Se crea un usuario y retorna un token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve (_, args) {
        
        const user = await User.findOne({ email: args.email }).select('+password'); 
        //es necesario poner el select('password') para que nos traiga tambien en la consulta la contraseña para poder tambien validarla con el args.password
        if(!user || args.password !== user.password) throw new Error('Email o Contraseña incorrectos');

        const token = createjwtToken(user);

        return token;
    }
};

const createdPost = {
    type: PostType,
    description: "crea un nuevo Post",
    args: {
        title: { type: GraphQLString},
        body: { type: GraphQLString}
    },
    async resolve(_, args, {verifiedUser}) {
        const { title, body } = args;

        const NewPost = new Post({
            title,
            body,
            authorId: verifiedUser._id
        });

        const post = await NewPost.save();        
        return post;
    },
};

module.exports = {
    register,
    login,
    createdPost
}