import DemoBlock from './DemoBlock.vue'
import hotForceReload from './vite-plugin-force-hot-reload.js'

const enhanceApp = (app, options = { useDefaultComponent: true, hotForceReload: true }) => {
  // 使用默认的demo-block组件
  if (options.useDefaultComponent) app.component('DemoBlock', DemoBlock)
  // 在热更新时，强制刷新
  if (options.hotForceReload) hotForceReload()
}

export {
  enhanceApp,
  DemoBlock,
  hotForceReload
}
