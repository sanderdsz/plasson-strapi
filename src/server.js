const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect(
	'mongodb+srv://sanderdsz:admin@cluster0-ahwa4.mongodb.net/tindev?retryWrites=true&w=majority',
	{ useUnifiedTopology: true }
);

server.use(cors());

server.use(express.json());
server.use(routes);

server.listen(3333);
