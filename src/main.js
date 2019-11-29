import Vue from 'vue'
import i18n from './locales/index'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/http'
import './plugins/ie'
import './plugins/custom/'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Fontawesome from '@fortawesome/fontawesome'
import Fontawesomesolid from '@fortawesome/fontawesome-free-solid'
import Vuemoment from 'vue-moment'

// Vue.http.interceptors.push((request, next) => {
//   if (localStorage.getItem('token')) {
//     request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
//   }
//   next(response => {
//     if (response.status === 400 || response.status === 401 || response.status === 403) {
//       store.commit('auth/logout')
//       router.push({ path: '/login' })
//     }
//   })
// })
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(Vuemoment)
Vue.use(VueSidebarMenu)
Vue.use(ElementUI)
Vue.use(Fontawesome)
Vue.use(Fontawesomesolid)

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
