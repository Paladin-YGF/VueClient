export default {
    addToCart(context,payload) {
       return new Promise((resolve, reject) => {
         const flag = context.state.cartList.find(item => item.iid == payload.iid)
         console.log(flag)
         if(flag) {
            context.commit('addCount', flag)
            
            resolve('购物车该商品加 1 ')
         }else {
              context.commit('addCartItem', payload)
              resolve('加入购物车成功')
         }
       })
      }
}