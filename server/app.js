const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'build')));

//endpoints to be written HERE

app.get('/upload', (req, res) => {
	res.send('hello backend');
});

module.exports = app;
