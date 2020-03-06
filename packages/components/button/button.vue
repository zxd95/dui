<template>
  <button :class="classes">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
const prefixCls = 'dui-button'

export default {
  // 方便组件注册找到组件名
  name: 'DuiButton',
  // props类型校验
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}--${this.type}`,
        {
          'is-plain': this.plain,
          'is-round': this.round,
          'is-circle': this.circle
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './../../../src/styles/components/button.scss';
</style>
