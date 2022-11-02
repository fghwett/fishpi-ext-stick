import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './theme/index.less';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
  },
  mounted() {

  },
  render: h => h(App)
}).$mount('#app')
