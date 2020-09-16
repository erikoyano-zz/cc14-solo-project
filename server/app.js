const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

const api = {
	key: '990c548db80372ce5608848c39a3ac1e',
	base: 'https://api.openweathermap.org/data/2.5/',
};

app.use(express.static(path.resolve(__dirname, '..', 'build')));

//endpoints to be written HERE

// app.get('/upload', (req, res) => {
// 	res.send('hello backend');
// });

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'app.js'));
});

app.get('/weather/:city', async (req, res) => {
	try {
		const city = req.params.city;
		const fetchedAPI = await fetch(
			// 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=990c548db80372ce5608848c39a3ac1e'
			`${api.base}weather?q=${city}&units=metric&appid=${api.key}`
		);
		const jsonData = await fetchedAPI.json();
		res.send(jsonData);
	} catch (err) {
		console.error('not working', err);
		res.sendStatus(500);
	}
});

module.exports = app;
