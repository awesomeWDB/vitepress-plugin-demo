const forceHotReload = () => {
  if (import.meta.hot) {
    // HMR 代码
    import.meta.hot.on('vite:beforeUpdate', () => {
      location.reload()
    })
  }
}

export default forceHotReload