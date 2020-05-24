import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './modules'
import { 
  GET_SUPPLIER_LIST, 
  SUPPLIER_LIST_ACTION,
  ADD_SUPPLIER_DATA,
  DELETE_SUPPLIER_DATA
} from '@/constants/actionType'
import api from '@/services/api'
import { get, post } from '@/utils/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },

  mutations: {
    [GET_SUPPLIER_LIST] (state, action) {
      state.list = action;
    },

    [ADD_SUPPLIER_DATA] (state, action) {
      post(api.addSupplier,action).then(res => {
        if(res.code === 200) {
          this.dispatch(SUPPLIER_LIST_ACTION);
        }
      })
    },

    [DELETE_SUPPLIER_DATA] (state, action) {
      post(api.deleteSupplier,action).then(res => {
        if(res.code === 200) {
          this.dispatch(SUPPLIER_LIST_ACTION);
        }
      })
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
