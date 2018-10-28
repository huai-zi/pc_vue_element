import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import login from './modules/login'

//状态管理注册,功能可划分出来,在modules里进行状态定义以及相关操作
export const store = new Vuex.Store({
  modules: {
    login
  }
})
