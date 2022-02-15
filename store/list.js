export const state = () => ({
  list: [],
  id: [],
  updata: [],
  isEdit: false,
})
export const getters = {
  getCount: state => state.list,
  getId: state => state.id,
  getUpdate: state => state.updata,
  isEdit: state =>  state.isEdit,
}

export const mutations = {
  setList (state, list) {
    state.list = list
  },
  getId (state, quesiotiondetail){
    state.id = quesiotiondetail
  },
  putList(state, updatelist) {
    state.updata = updatelist
  },
  toggleEdit( state ){
    state.isEdit = !state.isEdit
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
  },

  async updateId ({commit}, {id}) {
    const res = await this.$axios.$get(`/api/questions/${id}`)
    commit('getId', res)
  },

  TOGGLE_EDIT ({commit}) {
    commit('toggleEdit')
  }
}



