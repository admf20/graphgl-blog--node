const { GraphQLString } = require("graphql");

const hello = {
    type: GraphQLString,
    description: "esta funcion retorna un string",
    resolve: () => 'Hello Graphql'
};
//TODO: esta es una funcion hello que retorna un string es por eso que el type es un GraphQLString
// y en resolve es donde ponemos lo que vamos a retornar y despues lo exportamos
module.exports = {
    hello
};      