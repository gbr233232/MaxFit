const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');


route.get('/', homeController.index);
route.get('/login', homeController.login);
route.get('/planos', homeController.planos);
route.post('/cadastro', homeController.cadastro);


module.exports = route;
