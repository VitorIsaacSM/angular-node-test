const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT);

app.get('/*', (req, res => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
}));

console.log('server is running')