const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.status(200).json({ message: 'hello frm express server!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
