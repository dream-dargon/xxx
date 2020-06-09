import api from '@/services/api'
import { get, post } from '@/utils/request'
const initialState = {
  list: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'GET_LIST':
    return { ...state, list: [...payload.users]}

  case 'UPDATE_LIST':
    if(payload.status === '200'){
      get(api.userList).then(res => {
        state.list = res.users
      })
    }
    return state;

  default:
    return state
  }
}
