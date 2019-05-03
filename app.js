const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const cors = require('cors');

const app = express();

// enable CORS Requests
app.use(cors());

// set the public path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/js', express.static(path.join(__dirname, 'public', 'app', 'js')));
app.use('/css', express.static(path.join(__dirname, 'public', 'app', 'css')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

let LocalDB_URL = 'mongodb://localhost:27017/amesiere';

let mongoUrl = process.env.MONGOLAB_URI;
let DB_URL = mongoUrl? mongoUrl: LocalDB_URL;
console.log(':::::::::::::::', DB_URL)

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
    let { term = "" } = req.query;
    const client = new MongoClient(DB_URL, { useNewUrlParser: true });
    client.connect(err => {
        if (err) {
            console.log(err.message, err);
            throw err;
        }

        const collection = client.db('amesiere').collection('dictionary');
        collection.find().toArray((err, result) => {
            if (err) throw err
            let translations = translate(term, result[0].terms);
            res.status(200).json({ term, translations });
        });
        client.close();
    });
});

let routes = router;
app.use('/', routes);

let appPort = process.env.PORT || 5000;

app.listen(appPort, () => {
    console.log(`Listening on port ${appPort}... http://localhost:${appPort} ...`)
});
