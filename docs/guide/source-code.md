---
sidebarDepth: 3
---

# 实现较为简单，贴一下源码：

## vitepress-plugin-demo
```js
// vitepress-plugin-demo插件
const Token = require('markdown-it/lib/token')
const fs = require('fs')

const DEMOBLOCKTAG = '--demo'

const vitepressPluginDemoBlock = (md, options) => {
  console.log('配置项options(暂时都是写死的，后续看优化)：', options)
  const isSetupScriptToken = (token) => {
    const regx = /^<script setup CUSTOM_TAG>/
    return token.type === 'html_block' && regx.test(token.content)
  }
  const findSetupScriptToken = (tokens) => {
    for (let token of tokens) {
      if (isSetupScriptToken(token)) return token
    }
    return null
  }
  const addSetupScript = (tokens) => { // 这里是有问题的，必须在页面上显式的添加setup script
    const target = new Token('html_block', '', 0)
    target.block = true
    target.content = `<script setup CUSTOM_TAG>\n</script>`
    tokens.push(target)
    // console.log('这里添加了setup script', target)
    return target
  }
  const addImportToTokens = (string, componentName, tokens) => {
    let target = findSetupScriptToken(tokens)
    if (!target) target = addSetupScript(tokens)
    if (target.content.includes(string)) return
    const _arr = target.content.split('<script setup CUSTOM_TAG>').filter(item => item)
    target.content = `<script setup CUSTOM_TAG>\n${string}${_arr.join('')}`
  }
  const getSourceCode = (codepath) => { // 根据codepath获取源码
    return fs.readFileSync(codepath).toString()
  }
  const shouldToDemoBlock = (tokens, idx) => { // 判断是否渲染为demo-block
    if (tokens[idx].src && tokens[idx].type === 'fence') {
      if (tokens[idx + 2] && tokens[idx + 2].content.includes(DEMOBLOCKTAG)) {
        return true
      }
    }
    return false
  }
  const handleDemoBlockTag = (tokens, idx) => { // 处理demo-block的下一行的相关标记
    const content = tokens[idx + 2].content
    const args = content.split(DEMOBLOCKTAG)[1].split(' ').filter(item => item)
    tokens[idx + 2].hidden = true // 隐藏
    return { content, args }
  }
  const genComponentName = (() => {
    let id = 0
    return src => `DemoComponent${++id}`
  })()
  const defaultFenceRender = md.renderer.rules.fence
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    // console.log(tokens)
    // 传递 token 给默认的渲染器。
    if (!shouldToDemoBlock(tokens, idx)) return defaultFenceRender(tokens, idx, options, env, self);
    // 传递 token 给自定义的渲染器。
    const src = tokens[idx].src.replace(/\\/g, '/')
    const componentName = genComponentName(src)
    const componentCode = encodeURIComponent(getSourceCode(src))
    const { content, args } = handleDemoBlockTag(tokens, idx)
    const result = `<demo-block description="${args[0]}" code="${componentCode}">
      <${componentName} />
      <template #code>
        ${defaultFenceRender(tokens, idx, options, env, self)}
      </template>
    </demo-block>`
    addImportToTokens(`import ${componentName} from '${src}'`, componentName, tokens)

    // 下面来自vitepress源码(稍作改动)
    const RE = /^<(script|style)(?=(\s|>|$))/i;
    const scriptContent = tokens[tokens.length - 1].content; //
    const data = md.__data;
    const hoistedTags = data.hoistedTags || (data.hoistedTags = []);
    if (RE.test(scriptContent.trim())) {
      // hoistedTags.push(scriptContent); // 源码是push
      // 我这里是不断的替换，人为的赋值给10000index，防止多次添加
      data.hoistedTags[10000] = scriptContent
    }
    // console.log('这里添加/修改了hoistedTags', hoistedTags)
    return result
  }
  const defaultInlineRender = md.renderer.rules.text
  md.renderer.rules.text = function (tokens, idx, options, env, self) {
    if (tokens[idx].content.includes(DEMOBLOCKTAG)) {
      return ''
    }
    return defaultInlineRender(tokens, idx, options, env, self)
  }
}

export default vitepressPluginDemoBlock
```

## demo-block
```vue
// DemoBlock展示组件
<template>
  <div class="demo-block">
    <!-- 代码预览效果 -->
    <div class="preview">
      <slot />
    </div>
    <div
      class="content"
      v-show="clicked"
      ref="stickyContainer"
    >
      <div class="description">{{ description }}</div>
      <slot name="code" />
    </div>
    <Sticky
      :container="stickyContainer"
      :offset-bottom="0"
      position="bottom"
    >
      <div class="controls">
        <span
          class="control-btn"
          @click="toggleShow"
        >{{
          isCodeShow ? "隐藏" : "显示"
        }}</span>
      </div>
    </Sticky>
  </div>
</template>

<script>
import { ref } from "vue";
import $ from "jquery";
import Sticky from 'vant/es/sticky'
import 'vant/es/sticky/index.css'

export default {
  components: { Sticky },
  props: {
    description: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
  },
  setup ($props) {
    const stickyContainer = ref(null);
    const isCodeShow = ref(false); // 是否展示代码块
    const clicked = ref(false); // 是否点击过显示代码块的按钮
    const demoCode = ref(decodeURIComponent($props.code));
    const toggleShow = () => {
      clicked.value = true;
      isCodeShow.value = !isCodeShow.value;
      if (isCodeShow.value) {
        $(stickyContainer.value).slideDown("fast");
      } else {
        $(stickyContainer.value).slideUp("fast");
      }
    };
    return {
      isCodeShow,
      clicked,
      toggleShow,
      stickyContainer,
      demoCode,
    };
  },
  mounted () { },
};
</script>

<style scoped>
.demo-block {
  border: 1px solid #eaeefb;
}
.demo-block .preview {
  padding: 0.5rem;
  border-bottom: 1px solid #eaeefb;
}
.demo-block .content {
}
.demo-block .content .description {
  padding: 0.5rem;
}
.demo-block .content >>> div[class*="language-"] {
  margin: 0;
  border-radius: 0;
}
.demo-block .controls {
  border-top: 1px solid #eaeefb;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  height: 30px;
  background: white;
  color: black;
  transition: all 0.5s;
}
.demo-block .controls:hover {
  /* background: rgba(0, 0, 0, 0.5); */
  background: var(--code-bg-color);
  color: white;
}
.demo-block .control-btn {
  cursor: pointer;
  padding: 0 10px;
}
</style>
```

## hotForceReload
```js
// hotForceReload强制刷新
const forceHotReload = () => {
  if (import.meta.hot) {
    // HMR 代码
    import.meta.hot.on('vite:beforeUpdate', () => {
      location.reload()
    })
  }
}

export default forceHotReload
```