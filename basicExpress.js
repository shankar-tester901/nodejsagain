var express = require('express');
app = new express();
app.use(express.json());
app.use(express.urlencoded({extended :false}));


// app.get('/', (req, res) => {
//     const users = Us
//    res.send('Hi ! i AM EXPRESS ')
// })
app.use('/api/users', require('./routes/api/users'))


app.listen(9091);