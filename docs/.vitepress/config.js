const path = require('path')
const vitepressPluginDemo = require('../../dist/vitepress-plugin-demo.umd')

module.exports = {
  title: 'vitepress-plugin-demo',
  description: '一个vitepress插件，用于方便的在展示源码的同时，演示demo',
  srcDir: path.resolve('docs'),
  base: '/vitepress-plugin-demo/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('docs')
      },
    ]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(vitepressPluginDemo)
    }
  },
  themeConfig: {
    // repo: 'vuejs/vitepress',
    docsDir: 'docs',

    // editLinks: true,
    // editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: 'vitepress'
    // },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'EnhanceApp',
        link: '/enhanceApp/use-component',
        activeMatch: '^/enhanceApp/'
      },
      {
        text: 'github',
        link: 'https://github.com/awesomeWDB/vitepress-plugin-demo'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/enhanceApp/': getEnhanceAppSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar () {
  return [
    {
      text: 'Introduction',
      children: [
        { text: '前言', link: '/' },
        { text: '开始使用', link: '/guide/getting-started' },
        { text: '另一种写法', link: '/guide/other-way' },
        { text: '注意事项', link: '/guide/attention' }
      ]
    }
  ]
}

function getEnhanceAppSidebar () {
  return [
    {
      text: 'DemoBlock',
      link: '/enhanceApp/use-component'
    },
    {
      text: '强制刷新',
      link: '/enhanceApp/use-hot-force-reload'
    }
  ]
}