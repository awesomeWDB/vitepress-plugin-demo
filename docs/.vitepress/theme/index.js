import DefaultTheme from 'vitepress/theme'
import { enhanceApp } from '../../../lib/index.mjs'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    enhanceApp(app)
  }
}