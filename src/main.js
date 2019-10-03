import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import moment from 'moment'
import store from './store/store'
Vue.filter('dataFormat', (data, pattern="YYYY-MM-DD hh:mm:ss") =>{
  return moment(data).format(pattern)
})
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

