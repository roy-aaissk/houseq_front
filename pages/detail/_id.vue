<template>
<div>
    <Header/>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg ">
    <div class="flex flex-col text-center w-full mb-10 mt-10">
      <h3 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        質問詳細ページ
      </h3>
      <p>{{ this.$route.params.id }}</p>
      <p>{{ update }}</p>
    </div>
    <div class="border-t border-gray-200 container mx-auto items-center">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
          <dt class="text-sm font-medium text-gray-500">
            質問項目名
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" v-if="isEdit">
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="update.title">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">{{question_detail.title}}</label>
          </dd>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" v-else>
            {{ question_detail.title }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            質問タグ
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" v-if="isEdit">
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="update.tag">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">{{question_detail.tag}}</label>
          </dd>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" v-else>
            {{ question_detail.tag }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            回答
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" v-if="isEdit">
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="update.answer">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">{{question_detail.answer}}</label>
          </dd>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" v-else>
            {{ question_detail.answer }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            質問登録日
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            1000/11/11
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            更新日
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            100/11/11
          </dd>
        </div>
      </dl>
  </div>
  <div class="md:ml-auto flex flex-wrap items-center text-base justify-center" id="edit">
    <template v-if="isEdit">
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="updateQuestion">
        Save
      </button>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounde text-lg" @click="toggleEdit">
        Cancel
      </button>
    </template>
    <template v-else>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="toggleEdit">
        Edit
      </button>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="Delete(question_detail)">
        Delete
      </button>
    </template>
  </div>

      <Footer/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: 'detail',
  data() {
    return {
      update: {
        id: this.$route.params.id,
        title: '',
        tag: '',
        answer: '',
      },
      deleteTas: {},
    }
  },
  computed: {
    familyName(){
      return this.$auth.loggedIn ? this.$auth.$state.user.nickname : 'ゲスト'
    },
    ...mapGetters({
      isEdit: "list/isEdit",
      question_detail: "list/getId",
    }),
  },
  methods: {
    ...mapActions({
      toggleEdit: 'list/TOGGLE_EDIT',
    }),
    ...mapActions('list',['delete']),
    async updateQuestion() {
      this.toggleEdit;
      await this.$store.dispatch('list/updateQuestion', this.update)
    },
    Delete(question_detail){
      this.delete(question_detail)
      .then(res => {
        if(res === true){
          this.$router.push('../mypage');
        } else {
          console.log(res);
        }
      })
    }
  },
})


</script>


