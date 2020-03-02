const express = require('express');

const routes = express.Router();

const DevController = require('./controller/DevController');
const LikeController = require('./controller/LikeController');
const DislikeController = require('./controller/DislikeController');

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/likes', LikeController.store);

routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;
