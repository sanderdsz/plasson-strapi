const express = require('express');

const routes = express.Router();

const devController = require('./controller/devController');
const likeController = require('./controller/likeController');
const dislikeController = require('./controller/dislikeController');

routes.get('/', (req, res) => {
	return res.json('bem vindo à API do Tindev!');
});

routes.post('/devs', devController.store);
routes.get('/devs');

routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);

module.exports = routes;
