const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
	return res.json('bem vindo à API do Tindev!');
});

module.exports = routes;
