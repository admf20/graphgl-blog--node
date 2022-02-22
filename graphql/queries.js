const { GraphQLList, GraphQLID, GraphQLString } = require("graphql")
const {User, Post} = require("../models/")
const { UserType, PostType } = require("./types")

const users = {
    type: new GraphQLList(UserType),
    description: "busca todos los usuarios",
    resolve() {
        return User.find();
    },
};

const user = {
    type: UserType,
    description: "buscar usuario por ID",
    args: {
        id: { type: GraphQLID }
    },
    resolve(_, args) {
        return User.findById(args.id);
    },
}

const posts = {
    type: new GraphQLList(PostType),
    description: "busca todas las publicaciones",
    resolve() {
        return Post.find();
    }
}

const post = {
    type: PostType,
    description: "busca publicacion por ID",
    args: {
        id: { type: GraphQLID }
    },
    resolve(_, args) {
        return Post.findById(args.id)
    }
}

module.exports = {
    users,
    user, 
    posts,
    post
}