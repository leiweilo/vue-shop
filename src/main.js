import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局样式表
import '@/assets/css/global.css'
// 导入阿里字体图标
import '@/assets/fonts/iconfont.css'

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
