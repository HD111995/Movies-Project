const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favMovie = new Schema({
    _id:{
        
    },
    img_src:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required:true,
    },
    type:{
        type:Array,
        required:true,
        
    },
        relase_date:{
            type:Date,
            required:true,
    },
    over_view:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    popularity:{
        type:Number,
        required:true,
    }

}, {timestamps : true})

const Fav = mongoose.model('FavDbs',favMovie);

module.exports = Fav