const axios = require('axios');
const dev = require('../models/dev');

module.exports = {
	async store(req, res) {
		const { username } = req.body;

		const userExists = await dev.findOne({ user: username });

		if (userExists) {
			return res.json(userExists);
		}

		const response = await axios.get(
			`https://api.github.com/users/${username}`
		);

		console.log(response.data);

		const { name, bio, avatar_url: avatar } = response.data;

		const developer = await dev.create({
			name,
			user: username,
			bio,
			avatar
		});

		return res.json(developer);
	}
};
