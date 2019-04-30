const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

router.get('/', (req, res, next) => {
    res.status(200).json({
        hello: "World"
    });
});

router.get('/translate', (req, res, next) => {
    let { term } = req.query;
    res.status(200).json({
        term
    });
});

let routes = router;

app.use('/', routes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... http://localhost:${PORT} ...`)
});

