// 订单数据操作

const Order = require('../../models/Order');
const Address = require('../../models/Address');
const Product = require('../../models/Product');

!(async () => {
    // //创建订单
    // const requestBody = (
    //     {
    //         addressId: '60aa31466afc1d16d058003b',
    //         shopId: '60aa2e60eb8ac136acc99777',
    //         shopName: '沃尔玛',
    //         isCanceled: true,  //订单是否被取消
    //         products: [
    //             {
    //                 id: '60aa33038e5b060714f1c790',
    //                 num: 3 //购买数量
    //             },
    //             {
    //                 id: '60aa33048e5b060714f1c791',
    //                 num: 3 //购买数量
    //             },
    //         ]
    //     }
    // ) 
    // //获取address
    // const address = await Address.findById(requestBody.addressId);
    // //获取商品列表
    // const pIds = requestBody.products.map( p => p.id );    //['_id1','_id2']
    // const productList = await Product.find({
    //     shopId: requestBody.shopId,
    //     _id: {
    //         $in: pIds
    //     }
    // })
    // //整合订单数量
    // const productListWidthSales = productList.map( p => {
    //     //商品id
    //     const id = p._id.toString();

    //     //找到商品的购买数量
    //     const filterProducts = requestBody.products.filter( item => item.id === id );
    //     if( filterProducts.length === 0 ){
    //         throw Error('未找到匹配的销量数据')
    //     }
    //     return {
    //         product: p,
    //         orderSales: filterProducts[0].num
    //     }
    // })
    // await Order.create({
    //     username: 'zhangsan',
    //     shopId: requestBody.shopId,
    //     shopName: requestBody.shopName,
    //     isCanceled: requestBody.isCanceled,  //订单是否被取消
    //     address,
    //     products: productListWidthSales
    // })
})()