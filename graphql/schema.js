const {GraphQLSchema, GraphQLObjectType} = require('graphql');

const {users, user, posts, post} = require('./queries'); //schema que retorna datos
const {register, login, createdPost} = require('./mutation');  //schema que crea datos o manipula

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "esta consulta retorna un string",
    fields: { //TODO: fields es lo que vamos a retornar que seria una funcion que retorna un string 
        users,
        user,
        posts,
        post
    },
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "esta mutacion crea un usuario",
    fields: {
        register,
        login,
        createdPost
    },
});

module.exports = schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});
