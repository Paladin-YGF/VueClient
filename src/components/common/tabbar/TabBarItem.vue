<template>
  <div id="tabbarItem" @click="clickRouter">
         <div class="icon-active" v-if="isActive"><slot name="icon-active"></slot></div>
         <div class="icon" v-else><slot name="icon" class="icon"></slot></div>
         <div class="content-text" :class="{active: isActive}"><slot name="content-text" class="content-text"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  components: {
    
  },
  data(){
      return {
        //   isActive: false,
          Active:''
      }
  },
  props:{
      path: String
  },
  methods: {
      clickRouter() {
          console.log(this.$route)
        if(this.$route.path!=this.path){
            this.$router.push({path: this.path})
        }
      }
  },
  computed: {
      isActive() {
          return this.$route.path.indexOf(this.path)!= -1
      }
  }
}
</script>

<style scoped>
  #tabbarItem {
        flex:1;
    }
 .icon img, .icon-active img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .content-text {
    font-size: 12px;
    /* margin-top: 3px; */
    color: #333;
  }
  .active {
      color: deeppink;
  }
</style>