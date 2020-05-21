<template>
  <div class="home">
    <div class="form-action">
      <p>用户：<input type="text" value={user} v-model="user" /></p>
      <p>年龄：<input type="text" value={age} v-model="age" /></p>
      <input type="text" value={id} style="display:none">
      <button @click="dataFn(flag)">{{flag === 0 ? '添加' : '修改'}}</button>
    </div>
    <table 
      border='1' 
      cellSpacing='0' 
      cellPadding='0'
      width='500'
    >
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Gender</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v) in data" :key='v.id'>
          <td>{{v.name}}</td>
          <td>{{v.age}}</td>
          <td>{{v.id}}</td>
          <td>
            <button @click="changeFn(v)">修改</button>
            <button @click="deleteFn(v)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import './Home.less'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        user: '',
        age: '',
        id: '',
      }
    },

    created () {
      this.$store.dispatch('GET_DATA_ACTION')
    },

    computed: {
      ...mapState(['data','flag'])
    },

    methods: {
      dataFn (val) {//添加修改列表
        let obj = {};
        obj.name = this.user;
        obj.age = this.age;
        if(val === 0){
          this.$store.commit('ADD_DATA', obj);
        } else {
          obj.id = this.id;
          this.$store.commit('CHANGE_DATA', obj);
        }
      },

      deleteFn (val) {//删除
        this.$store.commit('DELETE_DATA', {id: val.id});
      },

      changeFn (val) {//修改
        this.user = val.name;
        this.age = val.age;
        this.id = val.id;
        this.$store.commit('CHANGE_FLAG')
      }
    }
  }
</script>
