import Vue from 'vue'
import VueRouter from 'vue-router'

// 未使用 babel 进行懒加载
// import Login from '@/components/Login'
// import Home from '@/components/Home'
// import Welcome from "@/components/Welcome"
// import Users from "@/components/user/Users"
// import Rights from "@/components/power/Rights"
// import Roles from "@/components/power/Roles"
// import Cate from "@/components/goods/Cate"
// import Params from "@/components/goods/Params"
// import GoodsList from "@/components/goods/List"
// import Add from "@/components/goods/Add"
// import Order from "@/components/order/Order"
// import Report from "@/components/report/Report"


// 使用 babel 进行懒加载，生产环境不能用，有时间查找问题,问题出在路由守卫那边，一直死循环

const Login = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Welcome.vue')
const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/user/Users.vue')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/power/Roles.vue')
const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '@/components/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '@/components/goods/Params.vue')
const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ '@/components/goods/List.vue')
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '@/components/goods/Add.vue')
const Order = () => import(/* webpackChunkName: "Order_Report" */ '@/components/order/Order.vue')
const Report = () => import(/* webpackChunkName: "Order_Report" */ '@/components/report/Report.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login'},
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component:Cate },
        { path: '/params', component:Params },
        { path: '/goods', component:GoodsList },
        { path: '/goods/add', component: Add },
        { path: '/orders', component: Order },
        { path: '/reports', component: Report }
      ]}
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径   from 代表从哪个路径跳转而来   next 是一个函数，表示放行
  // next 有两种放行，第一种直接调用next()直接放行，第二种调用next('路径')，强制跳转到我们指定的页面 解决了路由懒加载，爆栈问题（出在路由守卫上）
  if (to.path === '/login') {
    next();
    return
  }
  // if (to.path === '/login') next();  // 需要return
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')
  next()
})

export default router
