<template>
  <div id="MainTabBar">
      <TabBar id="tabbar">
          <TabBarItem id="tabbarItem" path="/home">
              <div slot="icon">
                  <img src="../../../assets/img/tabbar/home.svg" alt=""/>
              </div>
              <div slot="icon-active">
                  <img src="../../../assets/img/tabbar/home_active.svg" alt=""/>
              </div>
              <div slot="content-text">
                  首页
              </div>
          </TabBarItem>
          <TabBarItem path="/category">
              <div slot="icon" >
                  <img src="../../../assets/img/tabbar/category.svg" alt=""/>
              </div>
              <div slot="icon-active" >
                  <img src="../../../assets/img/tabbar/category_active.svg" alt=""/>
              </div>
              <div slot="content-text" >
                  分类
              </div>
          </TabBarItem>
          <TabBarItem path="/cart" >
              <div slot="icon" >
                  <img src="../../../assets/img/tabbar/cart.svg" alt=""/>
              </div>
              <div slot="icon-active" >
                  <img src="../../../assets/img/tabbar/cart_active.svg" alt=""/>
              </div>
              <div slot="content-text" >
                  购物车
              </div>
          </TabBarItem>
         <TabBarItem path="/profile" >
              <div slot="icon" >
                  <img src="../../../assets/img/tabbar/profile.svg" alt=""/>
              </div>
              <div slot="icon-active" >
                  <img src="../../../assets/img/tabbar/profile_active.svg" alt=""/>
              </div>
              <div slot="content-text" >
                 我的
              </div>
          </TabBarItem>
      </TabBar> 
       <keep-alive exclude="Detail">
          <router-view></router-view>
      </keep-alive>
      <div class="base" v-if="getCartListLength>0">{{getCartListLength}}</div>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
import { mapGetters }from 'vuex'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  created()  {
      console.log(this.$route.name)
  },
  computed: {
      index() {
          console.log(this.$route.name)
          return this.$route.name ==='home' || this.$route.name ==='category' || this.$route.name === 'cart' || this.$route.name === 'profile'
      },
      ...mapGetters(['getCartListLength'])
  }
}
</script>

<style scoped>
 #tabbar {
            display: flex;
            background-color: #f6f6f6;
            height: 49px;
            border-top: 1px solid #eee;
            box-shadow: 0px -1px 1px rgba(150,150,150,.08);
            position: fixed;
            left: 0;
            bottom: 0;
            right: 0;
            text-align: center;
            z-index: 9;
    }
    #MainTabBar {
        height: 100vh;
        width: 100%;
    }
    .base {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  position: absolute;
      left: 66%;
    bottom: 4%;
    /* left: 66vw;
    bottom: 4vh; */
  z-index: 99;
  line-height: 1.5rem;
}
</style>