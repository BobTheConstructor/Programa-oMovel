//server.js

const express = require('express');
const app = express();
let itens = ['Item 1', 'Item 2', 'Item 3'];

app.get('/itens', (req, res) => {
   res.json(itens);
});

app.post('/itens', (req, res) => {
    const newItem = 'Item ${itens.lenght + 1}';
    itens.push(newItem);
    res.status(201).json(newItem);
});


app.listen(3000, () => {
    console.log('Api rodando na porta 3000')

});