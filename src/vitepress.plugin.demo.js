const fs = require('fs')
const mdContainer = require('markdown-it-container')
const newMd = require('markdown-it')()

const DEMOBLOCKTAG = '--demo'

const vitepressPluginDemoBlock = (md, options) => {
  // console.log(options)

  const shouldFenceToDemoBlock = (tokens, idx) => { // 判断fence是否应该渲染为demo-block
    if (tokens[idx].src && tokens[idx].type === 'fence') {
      if (tokens[idx + 2] && tokens[idx + 2].content.includes(DEMOBLOCKTAG)) { // 如果他的下2个token符合要求，则返回true
        return true
      }
    }
    return false
  }

  const shouldFenceToBlank = (tokens, idx) => { // 判断fence是否应该渲染为''
    if (tokens[idx - 1] && tokens[idx - 1].type === 'container_demo_open') { // 如果他的上一个token为container_demo_open，则判断为第二种md写法，返回true
      return true
    }
    return false
  }

  const genComponentName = (() => { // 根据id生成组件名
    let id = 0
    return src => `DemoComponent${++id}`
  })()
  const getSourceCode = (codepath) => { // 根据codepath获取源码
    return fs.readFileSync(codepath).toString()
  }
  const handleDemoBlockTag = (tokens, idx) => { // 处理demo-block的下一行的相关标记，并返回相关参数
    const content = tokens[idx + 2].content
    const args = content.split(DEMOBLOCKTAG)[1].split(' ').filter(item => item)
    tokens[idx + 2].hidden = true // 隐藏（事实证明不生效，只能在设置text的渲染规则：md.renderer.rules.text）
    return { content, args }
  }

  const addImportToMd = (string, md) => { // 把demo的引入import代码插入到md.__data.__demoImports，并更新md.__data.__demoExportStr
    const __demoImports = md.__data.__demoImports || (md.__data.__demoImports = [])
    __demoImports.push(string)
    // TODO，这里我是硬编码，会造成页面中不能再export default的缺陷
    // 想法，手动设置（md.renderer.rules.html_block），然后查找标记 setup / export default的script，然后分析该script的代码，添加这里的import代码进去
    // 这样就还要分两种情况了：1、setup的script；2、export default的script。第一种还好，第二种需要解析字符串，暂时还没有什么想法。。
    md.__data.__demoExportStr = `
    <script setup>
      ${__demoImports.join('\n')}
    </script>
    `
  }

  const updateHoistedTags = () => { // 同步：hoistedTags[10000] = data.__demoExportStr
    // 下面参考自vitepress源码(稍作改动)
    // 主要是vitepress在genPageDataCode(hoistedTags, ...)有自己的一套逻辑，所以我这里需要手动生成script代码、给hoistedTags赋值
    const RE = /^<(script|style)(?=(\s|>|$))/i;
    const data = md.__data;
    const scriptContent = data.__demoExportStr;
    const hoistedTags = data.hoistedTags || (data.hoistedTags = []);
    if (RE.test(scriptContent.trim())) {
      // hoistedTags.push(scriptContent); // 源码是push
      // 我这里是不断的替换，人为的赋值给10000index，防止多次添加
      hoistedTags[10000] = scriptContent
      // console.log('这里添加/修改了hoistedTags:', hoistedTags)
    }
  }

  // 设置fence代码块的解析规则
  const defaultFenceRender = md.renderer.rules.fence
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    // 传递 token 给默认的渲染器。
    if (shouldFenceToBlank(tokens, idx)) return ''
    if (!shouldFenceToDemoBlock(tokens, idx)) return defaultFenceRender(tokens, idx, options, env, self);
    // console.log(tokens)
    // 传递 token 给自定义的渲染器。
    const src = tokens[idx].src.replace(/\\/g, '/')
    const componentName = genComponentName(src)
    const sourceCode = getSourceCode(src)
    const componentCode = encodeURIComponent(sourceCode)
    const { content, args } = handleDemoBlockTag(tokens, idx)
    const result = `<demo-block description="${args[0]}" :args="${JSON.stringify(args).replace(/"/g, '\'')}" code="${componentCode}">
      <${componentName} />
      <template #description>
        ${newMd.render(args[0])}
      </template>
      <template #code>
        ${defaultFenceRender(tokens, idx, options, env, self)}
      </template>
    </demo-block>`
    // 第一种方案，另起文件
    addImportToMd(`import ${componentName} from '${src}'`, md)
    updateHoistedTags() // 同步hoistedTags
    return result
  }
  // 设置text的解析规则
  const defaultTextRender = md.renderer.rules.text
  md.renderer.rules.text = function (tokens, idx, options, env, self) {
    if (tokens[idx].content.includes(DEMOBLOCKTAG)) {
      return ''
    }
    return defaultTextRender(tokens, idx, options, env, self)
  }

  // 提供另外一种写法
  md.use(mdContainer, 'demo', {
    validate (params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render (tokens, idx, options, env, self) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : ''
        const args = description.split(' ').filter(item => item)
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        // 第二种，源文档进行编辑
        const componentName = genComponentName()
        const encoded = new Buffer.from(content).toString('base64')
        const importStr = `import ${componentName} from '@vitepress-demo-123-${encoded}.vue'`
        addImportToMd(importStr, md) // 添加import代码
        updateHoistedTags() // 同步hoistedTags
        return `<demo-block description="${args[0]}" :args="${JSON.stringify([args]).replace(/"/g, '\'')}" code="${encodeURIComponent(content)}">
          <${componentName} />
          <template #description>
            ${newMd.render(args[0])}
          </template>
          <template #code>
            ${defaultFenceRender(tokens, idx + 1, options, env, self)}
          </template>
        `
      }
      return '</demo-block>'
    },
  })
}

export default vitepressPluginDemoBlock