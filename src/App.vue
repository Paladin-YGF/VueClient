<template>
  <div id="app">
    <!-- <NavBar></NavBar> -->
    
    <MainTabBar class="top-next"></MainTabBar>
  </div>
</template>

<script>
// import NavBar from '../src/components/common/navbar/NavBar'
import MainTabBar from './components/content/MainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar,
    // NavBar
  }
}
</script>

<style>
    @import url("./assets/css/base.css");
    .top-next {
      padding-bottom: 49px;
    }
</style>
