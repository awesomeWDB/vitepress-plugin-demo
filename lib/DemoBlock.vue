<template>
  <div class="demo-block">
    <!-- 代码预览效果 -->
    <div class="preview">
      <slot />
    </div>
    <div
      v-show="clicked"
      ref="stickyContainer"
      class="content"
    >
      <div class="description">
        <slot name="description" />
      </div>
      <slot name="code" />
    </div>
    <div
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
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import $ from 'jquery'
  // import Sticky from 'vant/lib/sticky'
  // import 'vant/es/sticky/index.css'

  export default {
    // components: { Sticky },
    props: {
      description: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      },
      args: {
        type: Array,
        default: () => ['']
      }
    },
    setup($props) {
      // console.log($props)
      const stickyContainer = ref(null)
      const isCodeShow = ref(false) // 是否展示代码块
      const clicked = ref(false) // 是否点击过显示代码块的按钮
      // const demoCode = ref(decodeURIComponent($props.code)); // 自行实现code的展示
      const toggleShow = () => {
        clicked.value = true
        isCodeShow.value = !isCodeShow.value
        if (isCodeShow.value) {
          $(stickyContainer.value).slideDown('fast')
        } else {
          $(stickyContainer.value).slideUp('fast')
        }
      }
      return {
        isCodeShow,
        clicked,
        toggleShow,
        stickyContainer
      // demoCode,
      }
    }
  }
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
