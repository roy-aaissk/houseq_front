<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">HouseQ</h1>
          <p class="mb-8 leading-relaxed">ログインはこちらから</p>
            <button class=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded " @click="auth0login()">
              Login
            </button>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: { Header },

  methods: {
    async auth0login() {
      await this.$auth.loginWith('auth0')
    },
  },

  head() {
    return {
      title: 'ログイン',
      meta: [
        {name:'login'},
        { hid: 'description', name: 'description', content: '家のQ&Aサイトです' }
      ],
    }
  },

} 
</script>