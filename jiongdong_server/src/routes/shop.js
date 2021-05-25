const router = require('koa-router')();
const { SuccessModel } = require('../res-model/index');
const { getHotList, getShopInfo, getProductSByShopId } = require('../controller/shop');

router.prefix('/api/shop');

//商店列表
router.get('/hot-list', async function ( ctx, next ) {
    const list = await getHotList();
    ctx.body = new SuccessModel(list);
});
//获取单个商店信息
router.get('/:id', async function ( ctx, next ) {
    const id = ctx.params.id;
    console.error(ctx)
    const shop = await getShopInfo(id);
    ctx.body = new SuccessModel(shop);
})
//获取商店商品信息
router.get('/:id/products', async function ( ctx, next ) {
    const shopId = ctx.params.id;
    const tab = ctx.query.tab || 'all';    //tab 默认值为all
    const products = await getProductSByShopId( shopId, tab);
    ctx.body = new SuccessModel(products);
})




module.exports = router;
