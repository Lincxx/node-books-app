const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

//middleware 
app.use(express.static(__dirname + '/../public'))


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})