import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    data: '北京',
    dataId: ''
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    getData (state, payload) {
      state.data = payload
    }

  },
  actions: {
  },
  modules: {
    plugins: [vuexLocal.plugin]
  }
})
