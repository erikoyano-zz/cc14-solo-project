const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

//endpoints to be written HERE

app.get('/');
