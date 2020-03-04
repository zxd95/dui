/*
 * @Author: zxd95
 * @Date: 2020-03-04 22:06:08
 * @LastEditTime: 2020-03-04 22:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dui/vue.config.js
 */

module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: false // 关闭eslint
}
