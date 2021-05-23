# 数据模型设计

列举各个数据模型示例，写明属性

## 用户

```js
{
    _id: 'xxx',
    username: '15966668888',  //唯一
    password: '13554sadfa'
}
```

## 地址

```js
{
    _id: 'xxx',
    username: '15966668888',     //和用户产生关联
    city: '北京',
    department: '某某小区'，
    houseNumber: '门牌号',
    name: '张三',
    phone: '15988886666'
}
```

## 商店

```js
{
    _id: 'xxx',
    name: '沃尔玛',
    imgUrl:'店铺图片',
    sales: 10000,      //月售
    expressLimit: 0,   //起送价格
    expressPrice: 5,   //运费
    slogan: 'VIP满98减4'
}
```

## 商品

```js
{
    _id: 'xxx',
    shopId: 'xxx',        //对应商店id
    name: '番茄 250 g/份',
    imgUrl:'商品图片',
    sales: 10,            //月售
    price: 33.6,          //优惠价
    oldPrice: 40.3,       //原价
    tabs: ['all','seckill']   //属于那个tab栏
}
```

## 订单

具有特殊性，待定