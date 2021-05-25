
const  User = require('../models/User');

/**
 * 注册
 * @param {String} username  用户名
 * @param {String} password  密码
 */
async function register( username, password ){
    //保存到数据库
    const newUser = await User.create({ username, password });
    return newUser;
}

/**
 * 登陆
 * @param {String} username  用户名
 * @param {String} password  密码
 */
async function login( username, password ){
    const user = await User.findOne({ username, password });
    if( user != null ){
        //登陆成功
        return true;
    }
    //登陆失败
    return false;
}
module.exports = { register, login };