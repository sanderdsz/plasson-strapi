import axios from 'axios';

const api = axios.create({
	baseURL: 'https://tindev-fullstack.herokuapp.com'
});

export default api;
