// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

let axiosInstance = axios.create({
  baseURL: 'http://localhost:8000'
})

Vue.http = Vue.prototype.$http = axiosInstance

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
