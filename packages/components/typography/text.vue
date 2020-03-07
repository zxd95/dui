<template>
  <span :class="classes">
    <template>
      <slot v-if="!hasChildTag"></slot>
      <component v-else :is="childTagName">
        <slot></slot>
      </component>
    </template>
  </span>
</template>

<script>
import { mixinProps } from './mixinProps.js'
const prefixCls = 'dui-typography-text'

export default {
  name: 'DuiTypographyText',
  mixins: [mixinProps],
  computed: {
    classes () {
      return [
        `${prefixCls}-${this.type}`,
        {
          'is-disabled': !!this.disabled
        }
      ]
    },
    hasChildTag () {
      const { mark, code, delete: del, underline: u, strong } = this
      return !!(mark || code || del || u || strong)
    },
    // eslint-disable-next-line vue/return-in-computed-property
    childTagName () {
      const { mark, code, delete: del, underline: u, strong } = this
      if (mark) {
        return 'mark'
      } else if (code) {
        return 'code'
      } else if (del) {
        return 'del'
      } else if (u) {
        return 'u'
      } else if (strong) {
        return 'strong'
      }
    }
  }
}
</script>

<style lang="scss">
mark {
  padding: 0;
  background-color: #ffe58f;
}
strong {
  font-weight: 600;
}
code {
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  font-size: 85%;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 3px;
}
del {
  text-decoration: line-through;
}
u {
  text-decoration: underline;
}
.dui-typography-text-secondary {
  color: #00000073;
}
.dui-typography-text-warning {
  color: #faad14;
}
.dui-typography-text-danger {
  color: #ff4d4f;
}
</style>
