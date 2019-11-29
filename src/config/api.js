export default {
  url: process.env.VUE_APP_API_HOST,
  path: {
    prefix: process.env.VUE_APP_API_PREFIX,
    storage: 'storage/',
    upload: 'files/file-upload',
  },
}
