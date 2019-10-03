export default {
    addToCart(context,payload) {
        const flag = context.state.cartList.find(item => item.iid == payload.iid)
        console.log(flag)
        if(flag) {
           context.commit('addCount', flag)
        }else {
             context.commit('addCartItem', payload)
        }
        console.log(context.state.cartList)
     }
}