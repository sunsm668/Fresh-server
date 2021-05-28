// address router

const router = require('koa-router')();
const { SuccessModel, ErrorModel } = require('../res-model/index');
const loginCheak = require('../middleware/loginCheak');
const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address');

router.prefix('/api/user/address');

//创建收获地址

router.post('/', loginCheak, async function ( ctx, next ) {
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    const data = ctx.request.body;
    //创建数据
    try{
        const newAddress = await createAddress( username, data);
        ctx.body = new SuccessModel(newAddress)
    }catch{
        console.error(ex);
        ctx.body = new ErrorModel( 10004, '创建收获地址失败')

    }
})

//获取收获地址列表
router.get('/', loginCheak, async function ( ctx, next ) {
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    const list = await getAddressList(username);
    ctx.body = new SuccessModel(list);    
})

// 获取单个收获地址
router.get('/:id', loginCheak, async function ( ctx, next ) {
    const id = ctx.params.id;
    console.log(id,'id..........................')
    const address = await getAddressById(id);
    ctx.body = new SuccessModel(address);
    
})
//更新收获地址
router.patch('/:id', loginCheak, async function ( ctx, next ) {
    const id = ctx.params.id;
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    const data = cxt.request.body;
    const newAddress = await updateAddress( id, username, data);
    ctx.body = new SuccessModel(newAddress);
    
})




module.exports = router;