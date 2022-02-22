const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = require('./graphql/schema');
const conexion = require('./db/index');
const { authentication } = require('./middlewares/auth');
const res = require('express/lib/response');

conexion();

app.use(authentication);

app.get("/", (req, res) => {
    res.json({
        mesage: 'Pagina Principal'
    })
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen('3000', () => {
    console.log('Servidor Corriendo, puerto: 3000');
});