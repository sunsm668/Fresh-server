const Order = require('../models/Order');
const Address = require('../models/Address');
const Product = require('../models/Product');

/**
 * 创建订单
 * @param {*} username 用户名
 * @param {*} data 订单数据
 */
async function createOrder(username, data){
    const {
        addressId,
        shopId,
        shopName,
        isCanceled = false, //默认值
        products = []       //默认值
    } = data;
    //根据 addressId 获取地址信息
    const address = await Address.findById(addressId);
    //获取商品列表
    const pIds = products.map( p => p.id );  //格式如： ['商品id','商品id'] 
    const ProductList = await Product.find({
        shopId,
        _id:{
            $in: pIds
        }
    })
    //拼接上购买数量
    const productListWithSales = ProductList.map( p => {
        //商品id
        const id = p._id.toString();

        //通过商品id找到销售数量
        const filterProducts = products.filter( item => item.id === id );
        if(filterProducts.length === 0){
            throw new Error('未找到匹配的销售数量')
        }
        return {
            Product: p,
            orderSales: filterProducts[0].num
        }
    })

    //创建订单
    const newOrder = Order.create({
        username,
        shopId,
        shopName,
        address,
        isCanceled,
        products: productListWithSales
    })
    return newOrder
}

module.exports = { createOrder }