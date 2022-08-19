import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局样式表
import '@/assets/css/global.css'
// 导入阿里字体图标
import '@/assets/fonts/iconfont.css'
// 由于饿了么没有树形表格，使用这个插件，只要在 vue ui 中的依赖项->安装依赖->运行依赖->查找 vue-table-with-tree-grid 插件安装即可
// 安装完毕之后，点击该依赖的查看详情，看如果引入，这里我们选择了手动导入，就是第二种
import TreeTable from 'vue-table-with-tree-grid'

// 导入 axios
import axios  from "axios"
// 为 axios 设置一下请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在请求后端接口时，后端要求在请求头上使用 Authorization 字段提供 token 令牌
// 所以在使用 axios 之前，先设置一下拦截器
axios.interceptors.request.use(config => {
  //console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须返回 config
  return config
})
Vue.prototype.$http = axios
// 全局注册树形表格
Vue.component('tree-table', TreeTable)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
