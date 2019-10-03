import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    base: '/dist/',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../views/home/Home.vue')
        },
        {
            path: '/cart',
            component: () => import('../views/cart/Cart.vue')
        },
        {
            path: '/category',
            component: () => import('../views/category/Category.vue')
        },
        {
            path: '/profile',
            component: () => import('../views/profile/Profile.vue')
        },
        {
            path: '/detail/:iid',
            component: () => import('../views/detail/Detail.vue'),
            name: 'detail'
        }
    ],
    mode: 'history'
})

export default router