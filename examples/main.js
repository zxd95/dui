import Vue from 'vue'
import App from './App.vue'
import DUI from './../packages/index' // 导入UI插件
import VueClipboard from 'vue-clipboard2' // 导入复制插件

Vue.config.productionTip = false

// 注册组件库
Vue.use(DUI)
// 注册复制插件
Vue.use(VueClipboard)

new Vue({
  render: h => h(App)
}).$mount('#app')
