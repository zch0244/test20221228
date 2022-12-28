import Vuex from 'vuex'

import Vue from 'vue'
import login from './login'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: login, // 存放数据

    getters: {}, // 计算属性

    mutations: {}, // 修改state中数据的一些方法

    actions: {}, // 异步方法

    modules: {} // store模块

})
export default store   