---
sidebarDepth: 3
---

# 结合vitepress介绍各文件的配置


## config.js
**参考[vitepress #configuration](https://vitepress.vuejs.org/guide/configuration.html)**
```js
const vitepressPluginDemo = require('vitepress-plugin-demo')

markdown: {
  config: (md) => {
    // use more markdown-it plugins!
    md.use(vitepressPluginDemoBlock)
  }
}
```

## theme/index.js
**参考[vitepress #Using Vue in Markdown](https://vitepress.vuejs.org/guide/using-vue.html#registering-global-components-in-the-theme)**
```js
// 如果需要使用我的demo-block组件来展示样式的话（供测试）
// 也可以自行实现、注册一个DemoBlock的组件
import DefaultTheme from 'vitepress/theme'
import { enhanceApp } from 'vitepress-plugin-demo/lib'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    enhanceApp(app， {
      useDefaultComponent: true, // 使用默认的展示组件（代码的显示切换按钮的定位好像有点问题，暂时懒得改了）
      hotForceReload: true, // 因为编辑md时，页面更新有问题，暂时想不到其他办法，就简单的将页面reload
    })
  }
}
```

## 编写md文件
**参考[vitepress #import-code-snippets](https://vitepress.vuejs.org/guide/markdown.html#import-code-snippets)扩展了其语法**

```
// 注意点：'<<<'的上一行必须要是一个空行（也就是需要另起一行），vitepress才会识别。

<<< @/demos/index.basic.vue
--demo 这个是demo的描述信息
```

**1.引入vue组件：**

<<< @/demos/index.basic.vue
--demo 引用vue组件

**2.引入md文件：**

<<< @/demos/index.basic.md
--demo 引用md文件

**3.引入md文件（md文件内嵌套引入）：**

<<< @/demos/index.basic2.md
--demo 引用嵌套引用的md文件
