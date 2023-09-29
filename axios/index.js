var express = require('express');
let app = express();
var axios = require('axios');

app.get('/', async (req, res) => {
    console.log('getAnimalFacts invoked ');
    let resp = await axios.get('https://cat-fact.herokuapp.com/facts');
    console.log(resp.data);
    let j = Math.floor(Math.random() * 5);
    console.log('j is  ' + j);
    console.log(resp.data[j].text);
    res.send(resp.data[j].text);

})


app.listen(9092);
