---
sidebarDepth: 3
---

# DemoBlock展示组件

## 默认的DemoBlock展示组件
```js
// theme/index.js
import DefaultTheme from 'vitepress/theme'
import { enhanceApp } from 'vitepress-plugin-demo/lib'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    enhanceApp(app, {
      useDefaultComponent: true // 默认为true
    })
  }
}
```

## 自行实现DemoBlock组件

**vitepress-plugin-demo的渲染规则中，向demo-block组件中传递了以下props和slots，可根据自己需要去实现**

### 接收的props
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| description | string | 对demo的描述信息，未经过markdown-it渲染，写的是什么就是什么 |
| code | string | demo的源码，采用encodeURIComponent编码 |

### 接收的slots
| 名称 | 说明 |
| --- | --- |
| default | 代码的执行效果 |
| description | 代码描述，采用markdown-it渲染，如果自定义的话，就自行根据$props.description实现 |
| code | 代码字符串，采用vuepress的渲染规则，如果自定义的话，就自行根据$props.code实现 |

### 全局引入

```js
// theme/index.js
import DefaultTheme from 'vitepress/theme'
import CustomDemoBlock from 'path/to/your/component'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    app.component('DemoBlock', CustomDemoBlock)
  }
}
```