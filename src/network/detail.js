import {request} from './request.js'

export function getDetail(iid){
   return request({
        url:'/detail',
        params:{
            iid
        }
    });
}

//用商品推荐接口请求
export function getRecommend(){
    return request({
        url:'/recommend'
    });
}

//将服务器返回的杂乱数据整合; 抽离数据
//基本信息数据
export class Goods{  
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
    }
}

//店铺信息数据

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

// 商品图片详细信息

