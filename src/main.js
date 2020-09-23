import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Auth from './auth'
import getTabcard from './auth/router'

Vue.config.productionTip = false
const auth = new Auth()
const menuList = auth.navigation()
store.commit('setMenuList', menuList)
const tabcard = getTabcard.tabcardByAffix()
store.commit('setTabcard', tabcard)

Vue.use(Element, {
  size: 'small'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
