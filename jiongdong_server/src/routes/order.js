// order router

const router = require('koa-router')();
const loginCheck = require('../middleware/loginCheak');
const { SuccessModel, ErrorModel } = require('../res-model/index');
const { createOrder, getOrderById } = require('../controller/order');

router.prefix('/api/order');

//创建订单
router.post('/', loginCheck, async function( ctx, next){
    //获取当前用户名
    const userInfo = ctx.session.userInfo;
    const username = userInfo.username;
    //获取订单信息
    const data = ctx.request.body;
    //创建订单
    try{
        const newOrder = createOrder(username,data);
        ctx.body = new SuccessModel(newOrder);
    }catch(ex){
        console.error(ex);
        ctx.body = new ErrorModel(10005, '订单创建失败');
    }
})


// 获取订单列表
router.get('/:id', loginCheck, async function ( ctx, next ) {
    const id = ctx.params.id;
    const order = await getOrderById(id);
    ctx.body = new SuccessModel(order);
    
})





module.exports = router;