
const Address = require('../models/Address');


/**
 * 创建地址
 * @param {String} username 用户名
 * @param {Object} data 地址的详细信息
 */
async function createAddress( username, data ){
    const address = await Address.create({
        username,
        ...data
    })
    return address
}
/**
 * 获取用户地址列表
 * @param {String} username 用户名
 */
async function getAddressList( username ){
    const list = await Address.find({ username}).sort({ updateAt: -1})
    return list
}

/**
 * 获取单个收获地址
 * @param {String} id 
 */
async function getAddressById( id ){
    const Address = await Address.findOne(id)
    return Address
}
/**
 * 更新收获地址
 * @param {string} id 
 * @param {string} username 用户名
 * @param {object} data  收获地址的详细信息
 */
async function updateAddress( id, username, data ){
    const address = await Address.findOneAndUpdate(
        { _id: id, username }, //查询条件
        { username, ...data},  //更新的数据
        { new: true }          //返回更新前的数据
        )
    return address
}

module.exports = {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress
}