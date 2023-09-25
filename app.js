const express = require('express');
const requestIp = require('request-ip');

const app = express();
const port = 3000;

app.use(requestIp.mw());

app.get('/image', (req, res) => {
    const clientIp = req.clientIp;

    console.log(`Adresse IP du client : ${clientIp}`);

    res.sendFile(__dirname + '/public/images/placeholder.png');
});

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});