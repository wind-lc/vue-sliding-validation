import Vue from 'vue'
import App from './App.vue'
import demo from '../packages/index'

Vue.config.productionTip = false
Vue.use(demo)
new Vue({
  render: h => h(App)
}).$mount('#app')
