import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './utils/veevaildate'
import Alert from './components/modules/alert/index'

Vue.use(Alert)
Vue.config.productionTip = false

axios.defaults.baseURL = (process.env.NODE_EVN !== 'prduction' ? 'https://wx.xiuchewuyou.cn/api.php/' : 'http://your.domain.com')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
