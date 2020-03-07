<template>
  <component :is="tagName" :class="classes">
    <slot></slot>
    <div style="display: inline-block" v-if="copyable" @click="handleCopy">
      <button>复制</button>
    </div>
  </component>
</template>

<script>
import { mixinProps } from './mixinProps.js'
const prefixCls = 'dui-typography'

export default {
  name: 'DuiTypographyTitle',
  props: {
    // 相当于h1,h2,h3,h4
    level: {
      type: String,
      default: '1'
    }
  },
  mixins: [mixinProps],
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-h${this.level}`,
        `${prefixCls}-${this.type}`,
        {
          'is-disabled': !!this.disabled,
          'is-delete': !!this.delete,
          'is-underline': !!this.underline,
          'is-mark': !!this.mark,
          'is-strong': !!this.strong,
          'is-code': !!this.code
        }
      ]
    },
    tagName () {
      return `h${this.level}` ? `h${this.level}` : 'h1'
    }
  },
  mounted () {
  },
  methods: {
    // 复制
    // handleCopy () {
    //   const { copyable } = this.$props
    //   if (typeof copyable === 'string') {
    //     this.$copyText(this.copyable)
    //   }
    // }
  }
}
</script>

<style lang="scss">
h1,h2,h3,h4{
  margin: 0;
}
.dui-typography-h1 {
  font-size: 38px;
}
.dui-typography-h2 {
  font-size: 30px;
}
.dui-typography-h3 {
  font-size: 24px;
}
.dui-typography-h4 {
  font-size: 20px;
}
// mixin
.dui-typography-secondary {
  color: #00000073;
}
.dui-typography-warning {
  color: #faad14;
}
.dui-typography-danger {
  color: #ff4d4f;
}
.is-disabled {
  color: #00000040;
  cursor: not-allowed;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.is-delete {
  text-decoration: line-through;
}
.is-underline {
  text-decoration: underline;
}
.is-mark {
  padding: 0;
  background-color: #ffe58f;
}
.is-strong {
  font-weight: 600;
}
.is-code {
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  font-size: 85%;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 3px;
}
</style>
