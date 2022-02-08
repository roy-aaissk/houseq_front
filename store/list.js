import axios from 'axios'

export const state = () => ({
  list: []
})

export const getters = {
  getCount: state => state.list
}

export const mutations = {
  setList (state, list) {
    state.list = list
  }
}

export const actions = {
  async getList ({commit}) {
    const res = await this.$axios.$get('/api/questions')
    commit("setList", res)
  }
}