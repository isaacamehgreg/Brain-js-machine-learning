const mongoose = require('mongoose');

// const PostSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     date: Date.now
// })

const PostSchema = mongoose.Schema({
        title: {
            type:String,
            reqired:true
        },
        description: {
            type:String,
            reqired:true
        },
        date: {
            type:Date,
            default:Date.now
        },
    })

module.exports = mongoose.model('Posts' , PostSchema);