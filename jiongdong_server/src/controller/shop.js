const Shop = require('../models/Shop');
const Product = require('../models/Product');

/**
 * 获取商店信息
 */
async function getHotList(){
    const list = Shop.find().sort({_id: -1});
    return list;
}

/**
 * 获取单个商店信息
 * @param {String} id 
 * @returns 
 */
 async function getShopInfo(id){
    const shop = Shop.findById(id);
    return shop;
}

/**
 * 获取商店商品信息
 * @param {*} shopId  商店id
 * @param {*} tab  侧边栏分类
 */
async function getProductSByShopId( shopId, tab = 'all'){
    const list = await Product.find({
        shopId,
        tabs: {
            $in: tab
        }
    })
    return list;
}
module.exports = {
    getHotList,
    getShopInfo,
    getProductSByShopId
}