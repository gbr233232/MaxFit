const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const cadastroController = require('./src/controllers/cadastroController');
const { loginRequired } = require('./src/middlewares/middlewares');

route.get('/', homeController.index);
route.get('/login', homeController.login);
route.get('/planos', homeController.planos);
route.get('/cadastro/plano', cadastroController.exibirPlanoCadastro);
route.post('/cadastro/registrar', cadastroController.registrarCadastro);
route.post('/cadastro/login', cadastroController.login);
route.get('/cadastro/index',loginRequired, cadastroController.index);
route.get('/cadastro/logout', cadastroController.logout);



module.exports = route;
