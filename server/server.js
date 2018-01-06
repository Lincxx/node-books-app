const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//local
const {Book} = require('./models/books')
const {Store} = require('./models/stores')

const app = express();

//middleware 
app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.json())

//DB
const mongoose = global.Promise
mongoose.connect('mongod://localhost:27017/bookdb')


//POST
add.post('/api/add/store', (req, res)=>{
 console.log("Getting Post req")
 console.log(req.body)
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})