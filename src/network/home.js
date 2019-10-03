import {Request} from './request.js'


export function getHomeInfo() {
    return Request({
        url: '/home/multidata'
    })
}

export function getGoods(type, page) {
    return Request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}