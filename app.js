const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');

const app = express();

// set the public path
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

router.get('/hello', (req, res, next) => {
    res.status(200).json({ hello: "World" });
});

const DB_URL = 'mongodb://localhost:27017/amesiere';
const MongoClient = require('mongodb').MongoClient

// TODO: Improve the search algorithm
let translate = (term, terms, limit = 5) => {
    return terms.filter(
        t => t.definition.trim()
        .split(/[.,; ]/)[0].toLowerCase()
        .indexOf(term) === 0
    ).splice(0, limit);
};

router.get('/translate', (req, res, next) => {
    let { term } = req.query;
    MongoClient.connect(DB_URL, (err, client) => {
        if (err) throw err

        var db = client.db('amesiere')
        db.collection('dictionary').find().toArray((err, result) => {
            if (err) throw err

            let translations = translate(term, result[0].terms);
            res.status(200).json({ term, translations });
        });
    });
});

let routes = router;
app.use('/', routes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... http://localhost:${PORT} ...`)
});
