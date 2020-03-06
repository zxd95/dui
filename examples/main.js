import Vue from 'vue'
import App from './App.vue'
import DuiButton from './../packages/components/button/button.vue'
import DuiTypography from './../packages/components/typography/typography.vue'
import DuiTypographyTitle from './../packages/components/typography/typographyTitle.vue'

Vue.config.productionTip = false
Vue.component(DuiButton.name, DuiButton)
Vue.component(DuiTypography.name, DuiTypography)
Vue.component(DuiTypographyTitle.name, DuiTypographyTitle)

new Vue({
  render: h => h(App)
}).$mount('#app')
