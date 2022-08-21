// 这是项目发布阶段需要用到的 babel 插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时候的插件数组，就是路由的懒加载，也可以使用官网推荐的方法
    // prodPlugins 用了好像不行
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
