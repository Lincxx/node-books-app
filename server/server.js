const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

//middleware 
app.use(express.static(__dirname + '/../public'))


//DB
const mongoose = global.Promise
mongoose.connect('mongod://localhost:27017/bookdb')

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})