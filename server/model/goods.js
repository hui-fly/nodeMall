let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    '':{type:String},
    'productName':String,
    'scalePrice':Number,
    'productImage':String,
});
module.exports = mongoose.model('Good',productSchema)