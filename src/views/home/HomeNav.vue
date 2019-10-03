<template>
  <div id="home">
     <NavBar class="home-bg">
         <div slot="center" class="center">
             购物街
         </div>    
    </NavBar> 
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
    name: 'HomeNav',
    components: {
        NavBar
    }
}
</script>

<style scoped>
  .home-bg {
        background: pink;
        color: #fff;
        /* box-shadow: 2px 0 2px 2px rgba(233, 8, 8, 0.5); */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
    }
    
</style>