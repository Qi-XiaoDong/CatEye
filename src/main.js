import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common/common.css'
import './assets/css/common/reset.css'

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')