export const mixinProps = {
  props: {
    // 文本类型: secondary | warning | danger
    type: {
      type: String,
      default: ''
    },
    // 禁用文本
    disabled: {
      type: Boolean,
      default: false
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
    },
    // 添加标记
    mark: {
      type: Boolean,
      default: false
    },
    // 添加代码样式
    code: {
      type: Boolean,
      default: false
    },
    // 是否加粗
    strong: {
      type: Boolean,
      default: false
    },
    // 是否可拷贝，可设置自定义文本
    copyable: {
      type: [Boolean, String],
      default: false
    },
    // 设置自动溢出省略
    ellipsis: {
      type: [Boolean, String, Object],
      default: false
    }
  }
}
