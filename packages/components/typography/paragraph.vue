<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { mixinProps } from './mixinProps.js'
const prefixCls = 'dui-typography-paragraph'

export default {
  name: 'DuiTypographyParagraph',
  mixins: [mixinProps],
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    }
  }
}
</script>

<style lang="scss">
.dui-typography-paragraph {
  color: #000000a6;
  margin-bottom: 12px;
}
a {
  color: #1890ff;
}
ul li {
  list-style-type: circle;

  li {
    list-style-type: disc;
  }
}
ul,
ol {
  margin: 0 0 1em 0;
  padding: 0;

  li {
    margin: 0 0 0 20px;
    padding: 0 0 0 4px;
  }
}
</style>
