import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    flag: 0,
  },
  mutations: {
    'GET_DATA' (state, action) {
      state.data = action;
    },

    'ADD_DATA' (state,action) {//添加用户
      axios.post(
        'https://api.baxiaobu.com/index.php/home/v5/add',
        qs.stringify(action)
        ).then(res => {
          if(res.status === 200){
            this.dispatch('GET_DATA_ACTION')
          }
        })
    },

    'DELETE_DATA' (state, action) {//删除用户
      axios.post(
        'https://api.baxiaobu.com/index.php/home/v5/deleteUser',
        qs.stringify(action)
        ).then(res => {
          if(res.status === 200){
            this.dispatch('GET_DATA_ACTION')
          }
        })
    },

    'CHANGE_FLAG' (state) {
      state.flag = 1;
    },
    
    'CHANGE_DATA' (state, action) {//修改用户
      axios.post(
        'https://api.baxiaobu.com/index.php/home/v5/updateUser',
        qs.stringify(action)
        ).then(res => {
          if(res.status === 200){
            this.dispatch('GET_DATA_ACTION');
            state.flag = 0;
          }
        })
    }
  },
  actions: {
    'GET_DATA_ACTION' ({commit}) {//用户列表
      axios.get('https://api.baxiaobu.com/index.php/home/v5/getuser')
        .then(res => {
          commit('GET_DATA',res.data.users);
        })
    }
  },
  modules: {
  }
})
