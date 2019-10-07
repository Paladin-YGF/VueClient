<template>
  <div id="cart">
    <NavBar class="Cart-bg">
      <div slot="center" class="center">商品分类</div>
    </NavBar>
    <left :categories="CategoryMenu" @selectItem="selectItem"></left>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getCategory,getSubcategory } from "../../network/category";
import Left from "./childcomponent/Left";

export default {
  name: "Category",
  components: {
    NavBar,
    Left
  },
  created() {
    this.getCategory();
  },
  data() {
    return {
      CategoryMenu: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  computed: {},
  methods: {
    getCategory() {
      getCategory().then(res => {
        console.log(res.data.data.category.list);
        this.CategoryMenu = res.data.data.category.list;
        this._getSubcategories(0);
      });
      
    },
    selectItem() {},
     _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.CategoryMenu[index].maitKey;
        console.log(this.CategoryMenu[index].maitKey)
        getSubcategory(mailKey).then(res => {
          console.log(res)
        })
      }
    }
}
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