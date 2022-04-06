const config = require('./pkg/config');
require('./pkg/db');

const auth = require('./handlers/auth');
const jwt = require('express-jwt');

const express = require('express');
const plants = require('./handlers/plants');

const api = express();

api.use(express.json());

api.use(jwt({

}))

api.get('/api/plants/', plants.getAll);
api.post('/api/plants/', plants.create);
api.get('/api/plants/:id', plants.getOne);
api.put('/api/plants/:id', plants.update);
api.patch('/api/plants/:id', plants.updatePartial);
api.delete('/api/platns/:id', plants.remove);

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log(`Server started on port ${config.get('service').port}`)});