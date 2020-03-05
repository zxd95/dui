import Vue from 'vue'
import App from './App.vue'
import DuiButton from './../packages/components/button/button.vue'

Vue.config.productionTip = false
Vue.component(DuiButton.name, DuiButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
