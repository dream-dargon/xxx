<template>
  <div class="view-reg">
     <h1>注册</h1>
      <p>
        用户：<input type="text" value={username} v-model="username" />
      </p>
      <p>
        密码：<input type="password" value={pwd} v-model="pwd" />
      </p>
      <button @click="goLogin">登录</button>
      <button @click="toreg">注册</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'reg',

    data () {
      return {
        username: '',
        pwd: ''
      }
    },

    methods: {
      toreg () {
        let obj = {};
        obj.username = this.username;
        obj.pwd = this.pwd;
        axios.post('http://api.baxiaobu.com/index.php/home/v1/register',obj)
          .then(res => {
            if(res.status === 200){
              this.$router.push({ name: 'Login'})
            }
          })
      },

      goLogin () {
        this.$router.push({ name: 'Login'})
      }
    }
  }
</script>
