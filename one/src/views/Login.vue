<template>
  <div class="view-login">
    <h1>登录</h1>
    <p>
      用户：<input type="text" value={username} v-model="username" />
    </p>
    <p>
      密码：<input type="password" value={pwd} v-model="pwd" />
    </p>
    <button @click="tologin">登录</button>
    <button @click="goReg">注册</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',

    data () {
      return {
        username: '',
        pwd: ''
      }
    },

    methods: {
      tologin () {
        let obj = {};
        obj.username = this.username;
        obj.pwd = this.pwd;
        axios.post('http://api.baxiaobu.com/index.php/home/v1/login',obj)
          .then(res => {
            if(res.status === 200){
              localStorage.setItem('token','111')
              this.$router.push({ name: 'Home'})
            }
          })
      },

      goReg () {
        this.$router.push({ name: 'Reg'})
      }
    }
  }
</script>
