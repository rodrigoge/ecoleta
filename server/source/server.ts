import express = require('express');

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Rodrigo',
        'José',
        'Ana',
        'Edno'
    ])
});

app.listen(3333);
