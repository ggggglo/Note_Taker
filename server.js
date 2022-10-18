// Packages and paths required
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

const app = express();

//Port where server will listen
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});