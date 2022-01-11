<template>
  <div class="container has-text-centered mt-6">
    <div>
      <h1 class="title">sample-nuxt-auth</h1>
      <h2 class="subtitle">ログアウトしました</h2>
      <button @click="logOutWithAuthZero">a</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logOutWithAuthZero() {
      await this.$auth.logout()
    },
  },
}
</script>