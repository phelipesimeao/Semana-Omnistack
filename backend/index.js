const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP:  get, post, put, delete

//Tipos de parâmetros: 
//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World' });
});

app.listen(3333);