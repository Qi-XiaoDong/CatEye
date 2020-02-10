import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  trict:true, // 开启严格模式
  state,
  mutations,
  getters,
  actions,
  modules: {
    //
  }
})
