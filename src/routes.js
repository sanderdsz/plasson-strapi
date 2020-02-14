const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
	return res.json('bem vindo à API do Tindev!');
});

routes.post('/devs', (req, res) => {
	console.log(req.body);

	return res.json({ ok: true });
});

module.exports = routes;