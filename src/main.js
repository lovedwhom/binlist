import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'reset-css'
import '@/assets/font/iconfont.css'
import '@/assets/common.scss'

// import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
