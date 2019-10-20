const express = require('express');
const bodyParsor = require('body-parser');

const app = express();
app.use(bodyParsor.json);
app.listen(3000);

app.get('/', (req, res, next) => {
    res.send('Hello world');
})



