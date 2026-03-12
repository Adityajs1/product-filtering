const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name :{
        type : Number,
        required :[true,'product name must be provide' ]
    },
    price:{
        type: String,
        required :[true,'product price must be provide' ]
    },
    featured:{
        type: Boolean,
        default : false
    },
    rating:{
        type : Number,
        default : 4.0
    },
    createdAt:{
        type : Date,
        default : Date.now()
    },
    company: {
        type : String,
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos']
        }
    }
})