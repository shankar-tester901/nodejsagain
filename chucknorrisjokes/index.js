'use strict';

var express = require('express');
const axios = require('axios');

var app = express();

app.use(express.static('public'));
app.get('/getJokes', (req, res) => {

    axios.get('https://api.chucknorris.io/jokes/random')
        .then(jokeResp => {
            // var randomNum = Math.floor(Math.random() * 20);
            // console.log(jokeResp.data);
            res.send(jokeResp.data.value)
            console.log(jokeResp.data.value);
        })
        .catch(err => {
            console.log("Error received : " + err);
            res.send("Seems something fishy! Bad Joke!");
        });

});


app.listen(9000);
