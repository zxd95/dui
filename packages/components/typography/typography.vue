<template>
  <aside :class="classes">
    <slot></slot>
  </aside>
</template>

<script>
const prefixCls = 'dui-typography'

export default {
  name: 'DuiTypography',
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
.dui-typography {
  color: #181818;
}
</style>
