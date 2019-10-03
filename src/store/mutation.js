export default {
    addCount(state,payload) {
        payload.count += 1
     },
     addCartItem(state,payload) {
        payload.count = 1
       state.cartList.push(payload)
     }
}