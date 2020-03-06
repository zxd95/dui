export const mixinProps = {
  props: {
    // 相当于h1,h2,h3,h4
    level: {
      type: String,
      default: '1'
    },
    // 文本类型: secondary | warning | danger
    type: {
      type: String,
      default: ''
    },
    // 添加删除线样式
    delete: {
      type: Boolean,
      default: false
    },
    // 添加下划线样式
    underline: {
      type: Boolean,
      default: false
    }
  }
}
