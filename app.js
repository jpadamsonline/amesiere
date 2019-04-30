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
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://localhost:27017/amesiere', function (err, client) {
        if (err) throw err

        var db = client.db('amesiere')
        db.collection('dictionary').find().toArray(function (err, result) {
            if (err) throw err

            // TODO: Improve the search algorithm
            let translate = (term, terms, limit = 5) => terms
                .filter(t => t.definition.trim().split(/[.,; ]/)[0].toLowerCase().indexOf(term) === 0)
                .splice(0,limit);

            let translations = translate(term, result[0].terms);
            res.status(200).json({
                term,
                translations
            });
        });
    });
});

let routes = router;

app.use('/', routes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... http://localhost:${PORT} ...`)
});

