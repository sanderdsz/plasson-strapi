const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(
	'mongodb+srv://sanderdsz:admin@cluster0-ahwa4.mongodb.net/tindev?retryWrites=true&w=majority',
	{ useUnifiedTopology: true }
);

app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));
app.use(routes);

// Server static assets producao
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
}

// Objeto procura PORTA do ambiente
const PORT = process.env.PORT || 5000;

// npm run server => Para iniciar o servidor
app.listen(PORT, () => console.log(`Servidor iniciou na porta ${PORT}`));
