
import Toast from './Toast.vue'
const obj = {
    install(Vue) {
       
       //1.创建组件构造器
       const temp = Vue.extend(Toast)
       //2.创建该组件
       const newToast = new temp()
       //3.挂载组件于body上
         //    newToast.$mount('#app2')  或
        newToast.$mount(document.createElement('div'))
        document.body.appendChild(newToast.$el)
        //4.vue原型上添加  $toast
        Vue.prototype.$toast = newToast
    
    }
}
export default obj