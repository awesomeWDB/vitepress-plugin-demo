const createDemoPlugin = () => {
  const virtualFileId = /^@vitepress-demo-\d+-([\d\D]+)(.vue|.md)$/
  return {
    name: 'demo-plugin', // 必须的，将会在 warning 和 error 中显示
    resolveId (id) {
      if (id.match(virtualFileId)) {
        return id
      }
    },
    load (id) {
      const matching = id.match(virtualFileId)
      if (matching) {
        // 源码字符串采用了base64编码，此处进行解码
        const result = new Buffer.from(matching[1], 'base64').toString()
        return result
      }
    }
  }
}

module.exports = createDemoPlugin