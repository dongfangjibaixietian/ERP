import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import ('../views/home/Home.vue')
const Category = () => import ('../views/category/Category.vue')
const Cart = () => import ('../views/cart/Cart.vue')
const Me = () => import ('../views/me/Me.vue')
const Detail = () => import ('../views/detail/Detail.vue')


const routes = [
{
path: '',
redirect:'/home'
},
{
path: '/home',
component: Home
},
{
path: '/category',
component: Category
},
{
path: '/cart',
component: Cart
},
{
path: '/me',
component: Me
},
{
    //动态路由传递参数
    path: '/detail/:iid',
    component: Detail
}
]

const router = new VueRouter({
routes,
mode: 'history'                        //数组用中括号，变量用大括号
})

export default router