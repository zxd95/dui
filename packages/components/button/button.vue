<template>
  <button
    class="dui-button"
    :class="classes"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
// const cls = 'dui-btn'

export default {
  name: 'DuiButton',
  computed: {
    classes () {
      return {
      }
    }
  }
}
</script>

<style lang="scss">
@import "./../../../src/styles/components/button.scss";
</style>
