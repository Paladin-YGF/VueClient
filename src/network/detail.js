import {Request} from './request.js'

export function getDtail(iid) {
    return Request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.goodsScore = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}
export class GoodsParams{
    constructor(info, rules){
        this.img = info.images ? info.images[0] : ''
        this.infos = info.set 
        this.sizes = rules.tables[0]
    }
}
export function getRecommend() {
    return Request({
      url: '/recommend',
    })
  }