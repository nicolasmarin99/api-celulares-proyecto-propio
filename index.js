
const express = require('express');
const app = express();
const port = 3001;

const { getCelulares } = require('./controller/get-celulares.js');
const { getCelularesByID } = require('./controller/get-celularesById.js');

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/celulares', getCelulares)

app.get('/celulares/:id', getCelularesByID)

app.listen(port, () => {
    console.log('Server running on port', port);
})