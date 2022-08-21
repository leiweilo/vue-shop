import Vue from 'vue'
import VueRouter from 'vue-router'

// 未使用 babel 进行懒加载
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from "@/components/Welcome"
import Users from "@/components/user/Users"
import Rights from "@/components/power/Rights"
import Roles from "@/components/power/Roles"
import Cate from "@/components/goods/Cate"
import Params from "@/components/goods/Params"
import GoodsList from "@/components/goods/List"
import Add from "@/components/goods/Add"
import Order from "@/components/order/Order"
import Report from "@/components/report/Report"


// 使用 babel 进行懒加载，生产环境不能用，有时间查找问题
// const Login = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Login.vue')
// const Home = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Home.vue')
// const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Welcome.vue')
// const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ './components/user/Users.vue')
// const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ './components/power/Rights.vue')
// const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ './components/power/Roles.vue')
// const Cate = () => import(/* webpackChunkName: "Cate_Params" */ './components/goods/Cate.vue')
// const Params = () => import(/* webpackChunkName: "Cate_Params" */ './components/goods/Params.vue')
// const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ './components/goods/List.vue')
// const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ './components/goods/Add.vue')
// const Order = () => import(/* webpackChunkName: "Order_Report" */ './components/order/Order.vue')
// const Report = () => import(/* webpackChunkName: "Order_Report" */ './components/report/Report.vue')

// const Login = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Login.vue')
// const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Home.vue')
// const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ '@/components/Welcome.vue')
// const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/user/Users.vue')
// const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/power/Rights.vue')
// const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/power/Roles.vue')
// const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '@/components/goods/Cate.vue')
// const Params = () => import(/* webpackChunkName: "Cate_Params" */ '@/components/goods/Params.vue')
// const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ '@/components/goods/List.vue')
// const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '@/components/goods/Add.vue')
// const Order = () => import(/* webpackChunkName: "Order_Report" */ '@/components/order/Order.vue')
// const Report = () => import(/* webpackChunkName: "Order_Report" */ '@/components/report/Report.vue')


// 使用官方推荐方法进行懒加载，在开发环境下没问题，但是打包之后，生产环境下有问题
// const Login = () =>
//   import(/* webpackChunkName: "login_home_welcome" */ '@/components/Login')
// const Home = () =>
//   import(/* webpackChunkName: "login_home_welcome" */ '@/components/Home')
// const Welcome = () =>
//   import(/* webpackChunkName: "login_home_welcome" */ '@/components/Welcome')
// const Users = () =>
//   import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/user/Users')
// const Rights = () =>
//   import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/power/Rights')
// const Roles = () =>
//   import(/* webpackChunkName: "Users_Rights_Roles" */ '@/components/power/Roles')
// const Cate = () =>
//   import(/* webpackChunkName: "Cate_Params" */ '@/components/goods/Cate')
// const Params = () =>
//   import(/* webpackChunkName: "Cate_Params" */ '@/components/goods/Params')
// const GoodsList = () =>
//   import(/* webpackChunkName: "GoodsList_Add" */ '@/components/goods/List')
// const Add = () =>
//   import(/* webpackChunkName: "GoodsList_Add" */ '@/components/goods/Add')
// const Order = () =>
//   import(/* webpackChunkName: "Order_Report" */ '@/components/order/Order')
// const Report = () =>
//   import(/* webpackChunkName: "Order_Report" */ '@/components/report/Report')

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
  // next 有两种放行，第一种直接调用next()直接放行，第二种调用next('路径')，强制跳转到我们指定的页面
  if (to.path === '/login') next()
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')
  next()
})

export default router
