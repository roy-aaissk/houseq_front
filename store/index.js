import Vuex from 'vuex'
import Vue from 'vue'
import questions from './modules/questions'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    questions
  }
})