var express = require('express');
let app = express();
var axios = require('axios');
const postcodes = require('node-postcodes.io');
var bodyParser = require("body-parser");
app.use(express.static('public'));

app.use(
    bodyParser.urlencoded({ extended: true })
);


app.get('/animals', async (req, res) => {
    console.log('getAnimalFacts invoked ');
    let resp = await axios.get('https://cat-fact.herokuapp.com/facts');
    console.log(resp.data);
    let j = Math.floor(Math.random() * 5);
    console.log('j is  ' + j);
    console.log(resp.data[j].text);
    res.send(resp.data[j].text);

})

/**
// single
let result = await postcodes.lookup('PO123AA')

// batch
let result = await postcodes.lookup(['PO123AA', 'PO123AB'])

// batch (with filter)
let result = await postcodes.lookup(['PO123AA', 'PO123AB'], {
    filter: 'postcode,longitude,latitude'
})


 */

app.get('/home', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
})


app.post('/addressLookup', async (req, res) => {
    console.log(JSON.stringify(req.body));
    console.log('incoming data to lookup is ' + req.body.postcode);
    console.log(req.body.postcode);
    // single
    let result = await postcodes.lookup(req.body.postcode);
    console.log(result);
    res.send(result);

});


app.listen(9092);
