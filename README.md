# vitepress-plugin-demo
是一个vitepress的扩展，实现：源码展示+效果预览，提供一个方便的文档编辑体验，特别是前端UI组件库的文档的编写。

可以[点击查看](https://awesomewdb.github.io/vitepress-plugin-demo/)具体的使用方式

**第一种方法（Import Code Snippets）：**

```
<<< @/demos/index.basic.vue
--demo 引用vue组件

<<< @/demos/index.basic.md
--demo 引用md文件

<<< @/demos/index.basic2.md
--demo 引用嵌套引用的md文件
```

**第二种方法（container，参考element-ui的写法）：**

```
:::demo 这个是另一种写法
your SFC code here
:::demo
```