<template>
  <div>
    <div class="test">红色的文本</div>
    <div>{{count}}</div>
    <button @click="count++">点我！</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { msg } from '@vitepress-demo-123-PHNjcmlwdD4gZXhwb3J0IGNvbnN0IG1zZyA9IDEyMzwvc2NyaXB0Pg==.vue'

export default {
  data () {
    return {
      count: ref(123)
    }
  },
  mounted () {
    console.log(msg)
  }
}
</script>

<style scoped>
.test {
  color: red;
}
</style>