// 商店数据操作

const Shop = require('../../models/Shop');

!(async () => {
    // //创建商店 
    // await Shop.create({
    //     name: '沃尔玛',
    //     imgUrl:'',
    //     sales: 10000,      //月售
    //     expressLimit: 0,   //起送价格
    //     expressPrice: 5,   //运费
    //     slogan: 'VIP满98减4'
    // })
    // await Shop.create({
    //     name: '山姆会员商店',
    //     imgUrl:'',
    //     sales: 10000,      //月售
    //     expressLimit: 0,   //起送价格
    //     expressPrice: 5,   //运费
    //     slogan: 'VIP满98减4'
    // })

    // //附件店铺
    // const shopList = await Shop.find().sort({ _id: -1});
    // console.log(shopList);

    // //获取商店详情
    const id = '60aa2e60eb8ac136acc99777';
    const shop = await Shop.findById(id);
    console.log(shop);

})()