import Vue from 'vue'
import Router from 'vue-router'
import Specialty from './routes/Specialty.vue'
import Practice from './routes/Practice.vue'
import Patient from './routes/Patient.vue'
import Graphics from './routes/Graphics.vue'
// import OktaVuePlugin from '@okta/okta-vue'

// Vue.use(OktaVuePlugin, {
//   issuer: 'https://login.application.com.br/oauth2/aus1xv1q0t6veZUfP357', authorization-server-okta-url
//   client_id: '0oa1zvvtt94xyxzDI357', client-id-okta
//   redirect_uri: window.location.origin + '/implicit/callback', okta-spa-callback-url
//   scopes: ['openid', 'profile', 'email'],
//   pkce: true,
//   testing: {
//     disableHttpsCheck: false,
//   },
// })

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'graphics',
      component: Graphics,
    },
    {
      path: '/specialty',
      name: 'specialty',
      component: Specialty,
    },
    {
      path: '/practice',
      name: 'practice',
      component: Practice,
    },
    {
      path: '/patient',
      name: 'patient',
      component: Patient,
      meta: {
        requiresAuth: true,
      },
    },
    // {
    //   path: '/implicit/callback',
    //   component: OktaVuePlugin.handleCallback(),
    // },
  ],
})

// router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
