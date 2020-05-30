import { getDatas } from '@/services/home'
import { post } from '@/utils/request'
import api from '@/services/api'

export default {
  namespace: 'home',

  state: {
    data: [],
    user: {}
  },

  effects: {
    *getData ({payload}, {call, put, select}) {
      const data = yield call (getDatas);
      yield put({
        type: 'getDataList',
        payload: data.users,
      })
    },

    *addData ({payload}, {call, put, select}) {
      const data = yield call (() => post(api.addDatas,payload));
      if(data.status === '200'){
        yield put({
          type: 'getData'
        })
      }
      
    },

    *deleteData ({payload}, {call, put, select}) {
      const data = yield call (() => post(api.delete,payload));
      if(data.status === '200'){
        yield put({
          type: 'getData'
        })
      } 
    },

    *editData ({payload}, {call, put, select}) {
      console.log(payload,111)
      const data = yield call (() => post(api.edit,payload));
      if(data.status === '200'){
        yield put({
          type: 'getData'
        })
      } 
    },

  },

  reducers: {
    getDataList (state, action) {
      return {...state, data: action.payload}
    },

    updateData (state, action) {
      return {...state, user: action.payload}
    }
    
  }

}