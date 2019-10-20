const express = require('express');
const bodyParsor = require('body-parser');

const app = express();
app.use(bodyParsor.json());

const port = 3001;
app.listen(port);

app.get('/', (req, res, next) => {
    console.log('requset received');
    res.send('Hello world');
})





