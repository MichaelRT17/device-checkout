require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , axios = require('axios')
    , ctrl = require('./controller');

const {
    SERVER_PORT
} = process.env

const app = express();

//build

app.use(bodyParser.json());

// REST CALLS



//

// massive(CONNECTION_STRING).then(db => {
//     app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`yo yo yo from port: ${SERVER_PORT}`)
    });
// });