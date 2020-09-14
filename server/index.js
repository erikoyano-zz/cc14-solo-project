const express = require('express');
const app = require('./app');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.status(200).json({ message: 'hello from express server!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
