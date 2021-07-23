---
sidebarDepth: 2
---

# 简介

[vitepress-plugin-demo]()是一个vitepress的扩展，实现：源码展示+效果预览，提供一个方便的文档编辑体验，特别是前端UI组件库的文档的编写。

## 初衷

vitepress本身已经提供了很好的文档编写体验，但本人还是有编写demo（特别是组件演示）的需求，所以想提供一个锦上添花的功能。

在看vue相关UI框架源码的时候，发现element-ui、navie的文档，都是借助markdown渲染引擎（markdow-it、marked），再按需加上内部扩展，实现自己的md-loader。然后打包工具配合md-loader，实现md文件到vue路由组件的渲染。

因此，想要实现一个类似于md-loader的封装，用户只需要实现自己的DemoBlock组件（根据props、slots）就行了，vitepress-plugin-demo就是这样的一款扩展。这样，用户只需要关注：md文档的编写、示例代码的编写。

## 实现

1. vitepress已经内部集成了markdown-it，并且在config.js中提供了md对象。[markdown-it官网](https://markdown-it.docschina.org/)，[vitepress高级配置](https://vitepress.vuejs.org/guide/markdown.html#advanced-configuration)
2. 最先参考的是element-ui的实现，把所有的demo都生成组件字符串（官网源码注明了"硬编码"），然后拼接到文档页面的components下面，这样的话里面一些script没有执行。[v2版]()，[v3版]()。
3. 然后尤大推荐了naive-ui，趁此机会学习了一下它的文档展示逻辑，把md文档分为两层：第一层为文档页面、第二层为文档demo；这样加载第一层的时候，解析到demo再去加载的时候，就会把demo当做一个组件解析，这样demo内script的相关引入都可以正常执行。[naive实现]()
4. 最后采用naive的方案，把文档分为两层，但是做一点小改动，可以直接引入vue组件，方便从其他地方复制过来（直接使用）。

另外，虽然官网目前只提供了：lang、base、title、description、markdown的配置项，但从vitepress源码中还是可以看到可以配置很多选项的，有很多文章可做。

```javascript
export interface UserConfig<ThemeConfig = any> {
  lang?: string
  base?: string
  title?: string
  description?: string
  head?: HeadConfig[]
  themeConfig?: ThemeConfig
  locales?: Record<string, LocaleConfig>
  markdown?: MarkdownOptions
  /**
   * Opitons to pass on to @vitejs/plugin-vue
   */
  vue?: VuePluginOptions
  /**
   * Vite config
   */
  vite?: ViteConfig
  customData?: any

  srcDir?: string
  srcExclude?: string[]

  /**
   * @deprecated use `srcExclude` instead
   */
  exclude?: string[]
  /**
   * @deprecated use `vue` instead
   */
  vueOptions?: VuePluginOptions
}
```

5. 所以后续目标是优化element-ui的方案，能够直接在文档页面上编辑demo，然后把demo作为一个异步模块（[虚拟文件](https://cn.vitejs.dev/guide/api-plugin.html#importing-a-virtual-file)）引入进来，这样就不用手动新建一个vue组件了（不利于docs文档的目录组织，个人看法）。

## github地址
