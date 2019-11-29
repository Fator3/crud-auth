import axios from 'axios'
import Vue from 'vue'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPermissible () {
    return Vue.prototype.$auth.getAccessToken().then((response) => {
      return apiClient.get('login/permissible', {
        headers: {
          Authorization: `Bearer ${response}`,
        },
      })
    })
  },
  getRestricted () {
    return Vue.prototype.$auth.getAccessToken().then((response) => {
      return apiClient.get('login/restricted', {
        headers: {
          Authorization: `Bearer ${response}`,
        },
      })
    })
  },
}
