<template>
  <div id="cart">
    <NavBar class="Cart-bg">
      <div slot="center" class="center">购物车</div>
    </NavBar>
    <Cart-list :getCartList = 'getCartList'></Cart-list>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from './childComponents/CartList'
import {mapGetters} from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
        ...mapGetters(['getCartList'])
  }
};
</script>

<style scoped>
.Cart-bg {
  background: pink;
  color: #fff;
  /* box-shadow: 2px 0 2px 2px rgba(233, 8, 8, 0.5); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  text-align: center;
}

</style>