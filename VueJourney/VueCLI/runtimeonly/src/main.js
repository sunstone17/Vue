import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
console.log(App)
/* eslint-disable no-new */
const v = new Vue({
  el: '#app',
  render: h => h(App)
})
console.log(v)