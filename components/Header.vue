<template>
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/mypage" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> -->
        <span class="ml-3 text-xl">HouseQ</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Nuxt-link class="mr-5 hover:text-gray-900" to="/mypage" >MyPage</Nuxt-link>
        <button class=" flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded mr-2" @click="auth0logout()">
          Logout
        </button>
        <button class=" flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded " @click="auth0login()">
          Login
        </button>
      </nav>
    </div>
  </header>
</template>

<script>

export default ({
  data() {
    return {
      login: false,
      auth0: {},
      APP_PATH: '/mypage',
      userData: {},
    }
  },
  methods: {
    async configureClient() {
      const config = {
        domain: 'dev-szq8bqvo.us.auth0.com',
        clientId: 'uH7X21sYgOp9uZK3rfOGWodpuG9oJdfx',
      };
      this.auth0 = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId,
      });
    },

    // ログインユーザー情報取得
    async updateUI() {
      const isAuthenticated = await this.auth0.isAuthenticated();
      if(isAuthenticated) {
        this.login = true;
        this.userData = await this.auth0.getUser();
        this.userData.token = await this.auth0.getTokenSilently();
      }
    },

    async auth0login() {
      await this.$auth.loginWith('auth0')
    },

    async auth0logout() {
      await this.$auth.logout()
    },
  },

  async mounted() {
    // await this.configureClient();
    // this.updateUI();
    // const isAuthenticated = await this.auth0.isAuthenticated();
    // if(isAuthenticated) {
    //   return;
    // }

    const query = window.location.search;
    if(query.includes("code=") && query.includes("state=")) {
      await this.auth0.handleRedirectCallback();

      this.updateUI();

      window.history.replaceState({}, document.title, this.APP_PATH);
    }
  }
})
</script>
