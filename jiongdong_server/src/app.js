const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const cors = require('koa2-cors');

//注册路由
const index = require('./routes/index');
const users = require('./routes/users');
const addressRouter = require('./routes/address');
const shopRouter = require('./routes/shop');
const orderRouter = require('./routes/order');

// error handler
onerror(app);

//cors 配置
app.use(cors({
  origin: 'http://localhost:8080',     //前端origin
  Credentials: true //允许跨域带cookie
}))

// session 配置
app.keys = ['jalhf$#%^$%sjkdf']        //密钥，用于加密
app.use(session({
  //配置cookie
  cookie:{
    path: '/',
    httpOnly: true,                    //只能通过后端修改cookie
    maxAge: 24 * 60 * 60 * 1000        //过期时间24h
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRouter.routes(), addressRouter.allowedMethods())
app.use(shopRouter.routes(), shopRouter.allowedMethods())
app.use(orderRouter.routes(), orderRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
