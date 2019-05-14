const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/'));

app.listen(process.env.PORT);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/siteProj/index.html'));
});

console.log('server is running');