import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container,
    Header, Aside, Main, Menu, Submenu, MenuItem, Breadcrumb,
    BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch,
    Tooltip, Pagination, Dialog, MessageBox, Tag, Tree, Option,
    Select, Cascader, Alert, Tabs, TabPane, Steps, Step,
    Checkbox, CheckboxGroup, Upload} from 'element-ui'

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
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Option)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Upload)
