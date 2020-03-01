const express = require('express');

const routes = express.Router();

const devController = require('./controller/devController');

routes.get('/', (req, res) => {
	return res.json('bem vindo à API do Tindev!');
});

routes.post('/devs', devController.store);

module.exports = routes;
