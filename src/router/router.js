import Vue from 'vue'
import Router from 'vue-router'

const files = require.context('./modules', false, /\.js$/)
let routes = []

files.keys().forEach(key => {
  routes = routes.concat(files(key).default)
})

Vue.use(Router)

export default new Router({ routes })
