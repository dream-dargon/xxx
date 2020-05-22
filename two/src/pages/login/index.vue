<template>
  <div class="pages-login">
    <p>用户：<input type="text" value={username} v-model='username'/></p>
    <p>密码：<input type="password" value={password} v-model='password'/></p>
    <button @click="toLogin">登录</button> 
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      toLogin () {
        let obj = {};
        obj.username = this.username;
        obj.password = this.password;
        
      }
    }
  }
</script>

