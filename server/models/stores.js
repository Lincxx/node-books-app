import { mongo } from 'mongoose';

const mongoose = require('mongoose')


//schema
const storeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    phone:Number
})

//modle
const Store = mongoose('Store', storeSchema)

module.exports ={
    Store
}