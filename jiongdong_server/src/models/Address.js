// Address Modle

const mongoose = require('../db/db');

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true  //必填
    },
    city: String,
    department: String,
    houseNumber:  String,
    name:  String,
    phone:  String
},{ Timestamps: true });

const Address = mongoose.model('address', Schema);

module.exports = Address;