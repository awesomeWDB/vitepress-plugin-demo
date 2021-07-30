---
sidebarDepth: 2
---

# hotForceReload强制刷新

**因为个人技术不到家的原因，在更新md文档的时候，会造成组件的相关更新错误，具体原因没有查出来。**

所以为了编撰人员的方便，使用了vite提供的[HMR API钩子：import](https://cn.vitejs.dev/guide/api-hmr.html)来实现一个页面刷新的效果。
```js
// theme/index.js
import DefaultTheme from 'vitepress/theme'
import { enhanceApp } from 'vitepress-plugin-demo/lib/index.mjs'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    enhanceApp(app, {
      hotForceReload: true // 默认为true
    })
  }
}
```