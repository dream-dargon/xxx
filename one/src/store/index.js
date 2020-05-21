import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    'GET_DATA' (state, action) {
      state.data = action;
    },

    'ADD_DATA' (state,action) {
      axios.post(
        'https://api.baxiaobu.com/index.php/home/v5/add',
        qs.stringify(action)
        ).then(res => {
          if(res.status === 200){
            this.dispatch('GET_DATA_ACTION')
          }
        })
    }
  },
  actions: {
    'GET_DATA_ACTION' ({commit}) {
      axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser')
        .then(res => {
          commit('GET_DATA',res.data.users);
        })
    }
  },
  modules: {
  }
})
