// Shop Modle

const mongoose = require('../db/db');

const Schema = mongoose.Schema({
    name: String,
    imgUrl:String,
    sales: Number,      //月售
    expressLimit: {
        type: Number,
        default: 0      // 默认值 0
    },   //起送价格
    expressPrice: Number,   //运费
    slogan: String
},{ Timestamps: true });

const Shop = mongoose.model('shop', Schema);

module.exports = Shop;