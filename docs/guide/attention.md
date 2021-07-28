---
sidebarDepth: 3
---

# 注意事项

## setup
在插件实现的时候，是往最后生成的vue组件中添加`有setup标记的script`代码（实际上是前一步，操作的是hoistedTags，有兴趣的可以参考源码）。有以下逻辑：
1. 查找是否有setup的script：`const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/;`；
2. 如果有的话，会标记该script，然后在该script中引入demo组件（替换字符串）：
```js {1,2}
hoistedTags[index] = hoistedTags[index].replace('</script>', `
  ${importStr}
  </script>
`)
```
3. 如果没有的话，会在`hoistedTags[10000]`的地方构造一个setup的script字符串：
```js {1,2}
<script setup>
  ${__demoImports.join('\n')}
</script>
```

基于以上原理，在页面中有demo的情况下，`以下情形不支持`：
```vue {1,7}
// 不支持

{{count}}

<script>
export default {
  setup(){
    return {
      count: 123
    }
  }
}
</script>
```

**解决办法**
1. 简单的情况下，可以使用data()替换：
```vue {5}
{{count}}

<script>
export default {
  data(){
    return {
      count: 123
    }
  }
}
</script>
```

2. 还不满足需求的话，尝试下setup script
```vue {3-5}
{{count2}}

<script setup>
const count2 = 123
</script>
```

**如下所示：**

解决办法1：{{count}}

<script>
export default {
  data(){
    return {
      count: 123
    }
  }
}
</script>

解决办法2：{{count2}}

<script setup>
const count2 = 123
</script>