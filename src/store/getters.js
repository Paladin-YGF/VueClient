export default {
    getCartListLength(state, getters) {
        return state.cartList.length
    },
    getCartList(state) {
        return state.cartList
    }
}