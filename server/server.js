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
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/bookdb')


//POST
app.post('/api/add/store', (req, res)=>{
    const store = new Store({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
    });

    store.save((err, doc)=>{
        if(err){
            res.status(400).send(err);
        }
        res.status(200).send();
    })
});

app.post('/api/add/books', (req, res)=>{
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages,
        price: req.body.price,
        stores: req.body.stores
    })

    book.save((err, doc)=>{
        if(err){
            res.status(400).send(err);
        }
        res.status(200).send();
    })
});

//GET

app.get('/api/stores', (req, res)=>{
    Store.find((err, doc)=>{
        if(err){
            res.status(400).send(err);
        }
        res.send(doc);
    })
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})