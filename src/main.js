import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import less from "less"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
console.log(process.env,111)
Vue.use(ElementUI);
Vue.use(less)
Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
})
