"use strict";
var express = require("express");
var axios = require("axios");

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'animalsdb'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// connection.end();


var app = express();

//This works when you are sending specifically stated json data from the client else you will get undefined
app.use(express.json());


//This step is important when using a client with express else the js and html linkups break
app.use(express.static('public'));



app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
})


app.post("/getBreedImage", (req, res) => {
    // console.log('in getBreedImage ............')
    var hound = '';
    hound = req.body.data;
    console.log(" word to check is >>>>>>> .  " + req.body.data);
    if (hound == '') {
        hound = 'hound';
    }

    const requestUrl = "https://dog.ceo/api/breed/" + hound + "/images"
    console.log(requestUrl);
    var temp = "";


    axios
        .get(requestUrl)
        .then(function (response) {

            for (var i = 0; i < response.data["message"].length; i++) {

                var show_image = response.data["message"][i];
                var img = "<img src='" + show_image + "' style=width:350px;height:350px; </img>";
                temp =
                    temp + "<tr><td><div>" + img + "</div></td></tr>";
            }

            res.send(
                '<p></p><html><body><table style=img-align: center; border="1"><tr><th>This is how I look</th></tr>' +
                temp +
                "</table></body</html>"
            );

        })
        .catch(err => {
            console.log("Error in get  : " + err);
        });
});



app.get('/getBreeds', (req, res) => {
    console.log(' in getBreeds >>>>> ');

    var temp = "";

    const requestUrl = "https://dog.ceo/api/breeds/list/all";


    axios
        .get(requestUrl)
        .then(function (response) {
            var testDump = response.data["message"];
            // console.log(testDump);
            var keys = Object.keys(testDump);

            for (var i = 0; i < keys.length; i++) {
                var breed = keys[i];
                console.log(breed);
                insertToDB(breed);
                temp = temp + "<li>" + breed + "</li>";
            }
            res.send(
                ' <p>Breed Name</p>' +
                temp
            );

        });

});

app.get('/fetchFromDB', (req, res) => {
    console.log('fetch from DB invoked');
    //  var catalystApp = catalyst.initialize(req);
    getFromDB().then(breedNames => {
        res.send(breedNames);
    });

});




function getFromDB() {
    console.log('in getFromDB invoked ');
    //Execute the query by passing the query which in turn returns a promise
    return new Promise((resolve, reject) => {
        try {

            let query = 'select breed_name from dog_breed';
            console.log(query);
            let queryResult;

            connection.query(query, (err, rows, fields) => {
                if (err) throw err;
                console.log(rows);
                queryResult = rows;
                var breedNames = [];
                var tempName = '';
                for (var i = 0; i < queryResult.length; i++) {

                    tempName = queryResult[i];
                    //    console.log(tempName);
                    console.log('tempName is ----' + tempName.breed_name);
                    breedNames.push(tempName.breed_name);

                }
                resolve(breedNames);
            })



        }
        catch (error) {
            reject(error);
        }
    });
}

function checkDBInsertStatus() {
    return new Promise((resolve, reject) => {
        try {
            console.log(' in checkDBInsertStatus  invoked ');
            let queryResult;
            let query = 'select count(*) as count from dog_breed';
            connection.query(query, (err, rows, fields) => {
                if (err) throw err
                console.log(rows);
                queryResult = rows;
                if (rows[0].count == 0) {
                    resolve(queryResult);
                }
            })

        }
        catch (error) {
            reject(error);
        }
    })
}

function insertToDB(name) {

    console.log('insertToDB invoked ');
    console.log(name);

    checkDBInsertStatus().then(queryResult => {
        let query = `insert into dog_breed values ('` + name + `')`;
        console.log('insert query is ' + query);
        connection.query(query, (err, rows, fields) => {
            if (err) throw err
        })
    })

}

app.listen(9000);
console.log('Server listening on 9000');