const router = require('koa-router')();
const { SuccessModel, ErrorModel } = require('../res-model/index');
const { register, login } = require('../controller/user');

router.prefix('/api/user');

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })


//注册
router.post('/register', async function ( ctx, next ) {
    const { username, password } = ctx.request.body;
    try{
        //新建用户
        const newUser = await register ( username, password );
        ctx.body = new SuccessModel( newUser );
    }catch(ex){
        ctx.body = new ErrorModel( 10001, `注册失败 - ${ex.message}`);
    }
})

//登陆
router.post('/login', async function ( ctx, next ) {

    const { username, password } = ctx.request.body;
    //查询单个用户
    const res = await login(username, password);
    if(res){
        //登陆成功
        ctx.session.userInfo = { username };  //设置session
        ctx.body = new SuccessModel();
    }else{
        //登陆失败
        ctx.body = new ErrorModel( 10002, '登陆验证失败');
    }
})
module.exports = router;
