// User Model

const { model } = require('mongoose');
const mongoose = require('../db/db');
const Schema = mongoose.Schema({
    username:{
        type: String,
        require: true,  //必填
        unique: true    //唯一
    },
    password:{
        type: String,
        require: true,  //必填
    },
},{ Timestamps: true });

const User = mongoose.model('user', Schema);

module.exports = User;