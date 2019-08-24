import Vue from 'vue'
import App from './App.vue'
import Fly from 'flyio/dist/npm/wx'

import store from './store/store.js'

Vue.config.productionTip = false
App.mpType = 'app'

//将store对象放置在Vue的原型上，为的是每个实例都可以使用
Vue.prototype.$store = store;

let fly = new Fly;
Vue.prototype.$fly = fly;

const app = new Vue(App)
app.$mount()
