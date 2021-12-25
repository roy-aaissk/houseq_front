<template>
  <div>
    <p>ログインの方はこちら</p>
    <button class="button" @click="loginWithAuthZero">Auth0でログイン</button>
  </div>
</template>
<script>
import Vue from 'vue'
export default{
  methods: {
    loginWithAuthZero(){
      this.$auth.loginWith('auth0')
    },
  },

}
</script>

