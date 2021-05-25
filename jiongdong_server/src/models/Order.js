//Order Model


const mongoose = require('../db/db');

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    shopId: String,
    shopName:String,
    isCanceled: {
        type: Boolean,
        default: false
    },  //订单是否被取消
    address: {
        username: String,
        city: String,
        department: String,
        houseNumber: String,
        name: String,
        phone: String
    },
    products:[
    {
        product: {
            shopId: String,        //对应商店id
            name: String,
            imgUrl:String,
            sales: Number,            //月售
            price: Number,          //优惠价
            oldPrice: Number,       //原价
            tabs: [String]   //属于那个tab栏
        },
        orderSales: Number
    }
    ]
},{ Timestamps: true });


const Order = mongoose.model('order', Schema);

module.exports = Order;