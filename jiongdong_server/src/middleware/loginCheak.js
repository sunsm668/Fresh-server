// 登陆验证中间件
module.exports = async ( ctx, session) => {
    const session = ctx.session;
    if( session && session.userInfo){
        await next();
        return
    }
    ctx.body = {
        error: -1,
        messarg: '登陆验证失败'
    }
}