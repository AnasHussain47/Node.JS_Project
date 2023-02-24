const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String,
    color:String,
    contry:String
})

module.exports=mongoose.model('products',ProductSchema);


