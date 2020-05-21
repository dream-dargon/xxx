<template>
  <div class="home">
    <div class="form-action">
      <p>用户：<input type="text" value={user} v-model="user" /></p>
      <p>年龄：<input type="text" value={age} v-model="age" /></p>
      <button @click="dataFn(count)">添加</button>
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
          <td>{{v.gender}}</td>
          <td>
            <button>修改</button>
            <button>删除</button>
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
        count: 0
      }
    },

    created () {
      this.$store.dispatch('GET_DATA_ACTION')
    },

    computed: {
      ...mapState(['data'])
    },

    methods: {
      dataFn () {
        let obj = {};
        obj.name = this.user;
        obj.age = this.age;
        this.$store.commit('ADD_DATA', obj);
      }
    }
  }
</script>
