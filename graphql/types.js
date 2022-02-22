const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { User } = require('../models')

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "Objeto tipo usuario",
    fields: {
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        // password: {type: GraphQLString},
        displayName: {type: GraphQLString},
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString},
    },
});

const PostType = new GraphQLObjectType({
    name: "PostType",
    description: "Objeto tipo Post",
    fields: {
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        body: {type: GraphQLString},
        author: {type: UserType, resolve(parent, _){
            return User.findById(parent.authorId)
        }},
    },
});

module.exports = {
    UserType,
    PostType
}