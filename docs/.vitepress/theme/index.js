import DefaultTheme from 'vitepress/theme'
import { enhanceApp } from '../../../lib'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    enhanceApp(app)
  }
}