<template>
<div>
    <Header/>
      <section class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">住宅Q&A</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">質問事項一覧</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" v-for="(question, index) in $store.getters['list/getCount']" :key=question.id>
          <div class="hidden">{{ index }}</div>
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <h2 class="text-gray-900 text-lg title-font font-medium"  v-if="question.title">{{question.title}}</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base" v-if="question.answer">{{question.answer}}</p>
              <div>
                <NuxtLink class="mt-3 text-indigo-500 inline-flex items-center" :to="{ path: `/detail/${question.id}` }" @click.native="getId(question.id)">もっと見る
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" @click.native="Create()" :to="{ path: `create` }">Create
      </NuxtLink>
    </div>
  </section>
  <Footer/>
</div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from "vuex";
export default Vue.extend({
  name: 'MyPage',
  // middleware: [ 'auth', userAuth ],
  computed: {
    famlyName() {
      return this.$auth.loggedIn ? this.$auth.$state.user.nickname : 'ゲスト'
    },
  },
  methods: {
    getId(id) {
      this.$store.dispatch('list/getId', {id: id})
    },
    ...mapActions({
      getList: 'list/getList',
    }),
    Create(question) {
      console.log(question);
    }
  },
  mounted() {
    this.getList();
  }
})
</script>