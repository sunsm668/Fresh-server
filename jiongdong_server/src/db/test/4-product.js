//商品数据操作

const Product = require('../../models/Product');

!(async () => {
    //创建商品
    await Product.create({
    shopId: '111',     //沃尔玛
    name: '番茄 250g/份',
    imgUrl: '',
    sales: 10,            
    price: 33.6,         
    oldPrice: 40.6,  
    tabs: ['all','seckill','fruit']
    })
    await Product.create({
    shopId: '111',     //沃尔玛
    name: '提子 250g/份',
    imgUrl: '',
    sales: 10,            
    price: 33.6,         
    oldPrice: 40.6,  
    tabs: ['all','seckill','fruit']
    })
    await Product.create({
    shopId: '111',     //沃尔玛
    name: '番茄 250g/份',
    imgUrl: '',
    sales: 10,            
    price: 33.6,         
    oldPrice: 40.6,  
    tabs: ['all','seckill','fruit']
    })
    await Product.create({
    shopId: '111',     //沃尔玛
    name: '提子 250g/份',
    imgUrl: '',
    sales: 10,            
    price: 33.6,         
    oldPrice: 40.6,  
    tabs: ['all','seckill','fruit']
    })

    //查询某个商店，某个tab栏的商品列表
    const list = Product.find({
        shopId:'',
        tabs:{
            $in: 'all'
        }
    })
})()