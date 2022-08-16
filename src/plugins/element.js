import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container,
    Header, Aside, Main, Menu, Submenu, MenuItem, Breadcrumb,
    BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch,
    Tooltip, Pagination, Dialog, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 弹框提示组件有些不一样，它需要全局挂载到 Vue 身上, $message 名字可以自己取，官方用message
// 现在好像官方自动帮我们挂载了$message
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
