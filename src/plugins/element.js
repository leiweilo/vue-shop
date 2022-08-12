import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 弹框提示组件有些不一样，它需要全局挂载到 Vue 身上, $message 名字可以自己取，官方用message
// 现在好像官方自动帮我们挂载了$message
Vue.prototype.$message = Message
