import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import moment  from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import router from '../src/routes/index.js'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
Vue.prototype.$axios = axios
Vue.prototype.moment = moment
require('@/assets/css/style.css')
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
