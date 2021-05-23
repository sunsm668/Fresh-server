# API (接口)设计

## 注册

### url 

`api/user/register`

### method 

`post`

### request body

```js
{
    username: '15844447777',
    password: 'asdfarwg23'
}
```

### response body

```js
{
    errno: 0,
    message: 'errno != 0 ,错误信息'
}
```
## 登陆

### url 

`api/user/login`

### method 

`post`

### request body

```js
{
    username: '15844447777',
    password: 'asdfarwg23'
}
```

### response body

```js
{
    errno: 0,
    message: 'errno != 0 ,错误信息'
}
```

## 获取用户信息

### url 

`api/user/info`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data:{
     username: 'xxx'
    },
    message: 'errno != 0 ,错误信息'
}
```

## 创建收获地址

### url 

`api/user/address`

### method 

`post`

### request body

```js
{
    city: '北京',
    department: '某某小区'，
    houseNumber: '门牌号',
    name: '张三',
    phone: '15988886666'
}
```

### response body

```js
{
    errno: 0,
    data:{
        _id: '收货地址id'
        city: '北京',
        department: '某某小区'，
        houseNumber: '门牌号',
        name: '张三',
        phone: '15988886666'
        createdAt: Date,
        updatedAt: Date
    },
    message: 'errno != 0 ,错误信息'
}
```

## 获取收货地址列表

### url 

`api/user/address`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data:[
        {
            _id: '收货地址id'
            city: '北京',
            department: '某某小区'，
            houseNumber: '门牌号',
            name: '张三',
            phone: '15988886666'
            createdAt: Date,
            updatedAt: Date
        }
    ]
    message: 'errno != 0 ,错误信息'
}
```
## 获取单个收货地址

### url 

`api/user/address/：id` （'：id' 是动态参数，服务端可获取）

示例： `api/user/address/100`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data:{
         _id: '收货地址id'
        city: '北京',
        department: '某某小区'，
        houseNumber: '门牌号',
        name: '张三',
        phone: '15988886666'
        createdAt: Date,
        updatedAt: Date
    }
    message: 'errno != 0 ,错误信息'
}
```
## 更新收货地址

### url 

`api/user/address/：id` 


### method 

`patch`

### request body

```js
{
    city: '北京',
    department: '某某小区'，
    houseNumber: '门牌号',
    name: '张三',
    phone: '15988886666'
}
```

### response body

```js
{
    errno: 0,
    message: 'errno != 0 ,错误信息'
}
```

## 附件（热门）店铺

### url 

`api/shop/hot-list` 


### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data:[
        {
            _id: '店铺id',
            name: '沃尔玛',
            imgUrl:'店铺图片',
            sales: 10000,      //月售
            expressLimit: 0,   //起送价格
            expressPrice: 5,   //运费
            slogan: 'VIP满98减4'
        }
    ]
    message: 'errno != 0 ,错误信息'
}
```
## 商店详情

### url 

`api/shop/：id` 


### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data:{
        _id: '店铺id',
        name: '沃尔玛',
        imgUrl:'店铺图片',
        sales: 10000,      //月售
        expressLimit: 0,   //起送价格
        expressPrice: 5,   //运费
        slogan: 'VIP满98减4'
    }
    message: 'errno != 0 ,错误信息'
}
```
## 查询（某个）商铺商品列表

### url 

`api/shop/：id/products` 

### query

`tab = all`

示例： `api/shop/10/products?tab=all`

### method 

`get`

### request body

无

### response body

```js
{
    errno: 0,
    data:{
        _id: '商品id',
        name: '番茄 250 g/份',
        imgUrl:'商品图片',
        sales: 10,            //月售
        price: 33.6,          //优惠价
        oldPrice: 40.3,       //原价
    }
    message: 'errno != 0 ,错误信息'
}
```
## 创建订单

### url 

`api/order` 


### method 

`post`

### request body

```js
{
  addressId: '收货地址id',
  shopId: '店铺id',
  shopName: '店铺名称',
  isCanceled: true,  //订单是否被取消
  products: [
      {
        id: '商品id',
        num: 3 //购买数量
      }
  ]
}
```

### response body

```js
{
    errno: 0,
    data:{
        _id: '订单id',
    }
    message: 'errno != 0 ,错误信息'
}
```
