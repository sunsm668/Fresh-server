// Product Modle

const mongoose = require('../db/db');

const Schema = mongoose.Schema({
    shopId: {
        type: String,
        requrie: true
    },        
    name: String,
    imgUrl:String,
    sales: Number,            
    price: Number,         
    oldPrice: Number,  
    tabs: [String]  //示例 ：tabs: ['all','seckill']
},{ Timestamps: true });

const Product = mongoose.model('product', Schema);

module.exports = Product;