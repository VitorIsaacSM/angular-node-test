const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/siteProj')));

app.listen(process.env.PORT || 3000);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname , 'dist/siteProj/index.html'));
});

console.log('server is running');