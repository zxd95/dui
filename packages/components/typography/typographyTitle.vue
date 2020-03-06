<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
import { mixinProps } from './mixinProps.js'
const prefixCls = 'dui-typography-title'

export default {
  name: 'DuiTypographyTitle',
  mixins: [mixinProps],
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-h${this.level}`
      ]
    },
    tag () {
      return `h${this.level}` ? `h${this.level}` : 'h1'
    }
  }
}
</script>

<style lang="scss">
.dui-typography-title-h1 {
  font-size: 38px;
}
.dui-typography-title-h2 {
  font-size: 30px;
}
.dui-typography-title-h3 {
  font-size: 24px;
}
.dui-typography-title-h4 {
  font-size: 20px;
}
</style>
