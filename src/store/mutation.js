export default {
    addCount(state,payload) {
        payload.count += 1
        // const cartList = JSON.stringify(state.cartList)
       
        window.localStorage.setItem('cartList', JSON.stringify(state.cartList))
     },
     addCartItem(state,payload) {
        payload.count = 1
        payload.checked = true
        state.cartList.push(payload)
       
       
      //  const cartList = JSON.stringify(state.cartList)
       window.localStorage.setItem('cartList', JSON.stringify(state.cartList))
     }
}