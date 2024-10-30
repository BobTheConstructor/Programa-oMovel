//server.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Olá, Express!');
});

app.listen(3000, () => {
    console.log('Servidor Express rodando na porta 3000')

});