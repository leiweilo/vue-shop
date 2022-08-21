<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img class='title-img' src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--页面主体区-->
    <el-container>
      <!--侧边栏-->
      <!--64px 是测量出来的，你在没有改变宽度时，点击折叠后看下多宽-->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!--折叠按钮-->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!--侧边栏菜单区-->
        <!--router 属性是饿了么的，表示开启侧边栏路由属性，不需要我们一个菜单项一个菜单项的配-->
        <!--注意：每个路由地址前面要加斜线（是每个 index 项），路由跳转地址由后端传递过来（这里没有斜线前缀，需要自己补上）-->
        <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409EFF"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            router
            :default-active="activePath">
          <!--一级菜单-->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!--一级菜单模板区域-->
            <template slot="title">
              <!--图标-->
              <i :class="iconsObj[item.id]"></i>
              <!--文本-->
              <span>{{item.authName}}</span>
            </template>
            <!--二级菜单-->
            <el-menu-item
                :index="'/' + subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--右侧主体内容-->
      <el-main>
      <!--路由占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      // 菜单图标
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      // 菜单折叠属性
      isCollapse: false,
      // 被激活的菜单链接地址
      activePath: ''
    }
  },
  created() {
    this.getMenuList()
    // 菜单激活，每个菜单路由组件切换时，都会走create
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    },
    // 获取所有菜单
    async getMenuList() {
      const {data: res} = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
      //console.log(res)
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
// 饿了么组件名字如 el-button，就是 class 样式，直接 .el-button 就可以取到

// 没给 el-container 添加高度的话，不会撑满整个屏幕，高度就是内容的高度
.el-container {
  height: 100%;
}

// 面板头部
.el-header {
  display: flex;
  background-color: #373D41;
  justify-content: space-between;
  // 这个头部组件有默认内边距
  padding-left: 0;

  // 文本样式
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  // less 嵌套样式
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

// 面板侧边栏
.el-aside {
  background-color: #333744;
  // 菜单右侧有边框，会溢出去，不好看
  transition: all .5s ease;
  .el-menu {
    border-right: none;
  }
}

// 面板主体
.el-main {
  background-color: #eaedf1;
}

// 菜单字体图标
.iconfont {
  margin-right: 10px;
}

// 菜单折叠按钮
.toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  // 每个文本竖线靠太近了，调整为0.2em
  letter-spacing: 0.2em;
  cursor: pointer;
}

.title-img {
  display: none;
}
</style>
