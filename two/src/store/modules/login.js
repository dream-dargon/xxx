import { GET_LOGIN_USER } from '@/constants/actionType'
import api from '@/services/api'
import { post } from '@/utils/request'

export default {
  namespaced: true,
  state: {
    loginUser:{}
  },

  mutations: {
    [GET_LOGIN_USER] (state, action) {
      post(api.loginAccount,action).then(res => {
        console.log(res,action);
        if(res.code === 200){
          state.loginUser = res.data;
          localStorage.setItem('token', state.loginUser.token);
        }
      })
    }
  },

  actions: {
  },

  modules: {
  }
}