import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getter'

//声明使用vuex
Vue.use(Vuex);

// 向外暴露Vuex对象
export default new Vuex.Store({
	state:state,
	actions:actions,
	getters:getters,
	mutations:mutations
})