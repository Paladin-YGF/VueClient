import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import moment from 'moment'
import store from './store/store'

//解决300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//vue-lazyload使用
import lazyLoad from 'vue-lazyload'
Vue.use(lazyLoad, {
  loading: require('./assets/img/loading/loading.jpg')
})
Vue.filter('dataFormat', (data, pattern="YYYY-MM-DD hh:mm:ss") =>{
  return moment(data).format(pattern)
})
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()

//封装安装 Toast
import Toast from './components/common/toast/index'
Vue.use(Toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

