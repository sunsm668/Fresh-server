// 地址数据操作


const Address = require('../../models/Address');

!( async () => {
    //创建收获地址
    // await Address>create({
    //     username: 'zhangsan',
    //     city: '北京市',
    //     department: 'xxx小区',
    //     houseNumber:  '门牌号1',
    //     name:  '张三',
    //     phone:  '18744449999'
    // })
    // await Address>create({
    //     username: 'zhangsan',
    //     city: '南京市',
    //     department: 'sss小区',
    //     houseNumber:  '门牌号9',
    //     name:  '张三',
    //     phone:  '15944449999'
    // })

    //获取（张三）收获地址列表
    // const addressList = await Address.find({ username: 'zhangsan'}).sort({ updatedAt: -1});
    // console.log(addressList);

    //根据id获取单个收获地址
    // const id = '';
    // const address = await Address.findById(id);
    // console.log(address);

    //更新收货地址
    const id = '';
    const newData = {
        username: 'zhangsan',
        city: '南京市',
        department: 'sss小区A',
        houseNumber:  '门牌号9A',
        name:  '张三A',
        phone:  '15944441111'
    }
    const address = await Address.findOneAndUpdate({
        _id: id ,
        username: 'zhangsan'
    },
    newData,
    {
        new: true //返回更新后的数据（默认false,返回更新前的数据）
    })
})()