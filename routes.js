const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const cadastroController = require('./src/controllers/cadastroController');
const loginController = require('./src/controllers/loginController');

route.get('/', homeController.index);
route.get('/login', homeController.login);
route.get('/planos', homeController.planos);
route.get('/cadastro/plano', cadastroController.exibirPlanoCadastro);
route.post('/cadastro/registrar', cadastroController.registrarCadastro);
route.post('/cadastro/areacliente', cadastroController.login);
route.get('/login/index', loginController.index);



module.exports = route;
