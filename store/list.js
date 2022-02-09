import axios from 'axios'

export const state = () => ({
  list: [],
  id: []
})
export const getters = {
  getCount: state => state.list,
  getId: state => state.id
}

export const mutations = {
  setList (state, list) {
    state.list = list
  },
  getId (state, quesiotiondetail){
    state.id = quesiotiondetail
  }
}

export const actions = {
  async getList ({commit}) {
    const res = await this.$axios.$get('/api/questions')
    commit("setList", res)
  },

  async getId ({commit}, {id}) {
    const res = await this.$axios.$get(`/api/questions/${id}`)
    commit('getId', res)
  }
}