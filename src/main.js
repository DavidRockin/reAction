import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { ReactStore } from './store/react'

import EditorModel from './models/Editor'

Vue.use(ReactStore)
Vue.use(ElementUI)
Vue.use(EditorModel)

new Vue({
  el: '#app',
  render: h => h(App)
})
