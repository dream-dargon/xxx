import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './modules'
import { 
  GET_SUPPLIER_LIST, 
  SUPPLIER_LIST_ACTION 
} from '@/constants/actionType'
import api from '@/services/api'
import { get } from '@/utils/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },

  mutations: {
    [GET_SUPPLIER_LIST] (state, action) {
      state.list = action;
    }
  },

  actions: {
    [SUPPLIER_LIST_ACTION] ({ commit }) {
      get(api.supplierList).then(res => {
        commit('GET_SUPPLIER_LIST', res.data)
      })
    }
  },

  modules: {
    login,
  }
})
