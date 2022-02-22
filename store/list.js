import axios  from 'axios'
export const state = () => ({
  list: [],
  id: [],
  isEdit: false,
})
export const getters = {
  getCount: state => state.list,
  getId: state => state.id,
  isEdit: state =>  state.isEdit,
}

export const mutations = {
  setList (state, list) {
    state.list = list;
  },
  getId (state, quesiotiondetail){
    state.id = quesiotiondetail;
  },
  toggleEdit( state ){
    state.isEdit = !state.isEdit;
  },
  updateQuestion: (state, update) => {
    const index = state.getId.findIndex(id => id.id === update.id);
    if( index !== -1){
      state.id.splice(index, 1);
    }
  },
  delete (state, res) {
    state.list.splice(res, 1);
  },
}

export const actions = {
  async getList ({commit}) {
    const res = await this.$axios.$get('api/questions');
    commit("setList", res);
  },

  async getId ({commit}, {id}) {
    const res = await this.$axios.$get(`api/questions/${id}`);
    commit('getId', res);
  },

  async updateQuestion ({commit}, update ) {
    const res = await this.$axios.$put(`questions/${update.id}`,update);
    commit('updateQuestion', res);
    this.$router.push('../mypage');
  },

  TOGGLE_EDIT ({commit}) {
    commit('toggleEdit');
  },

  async delete({commit}, list){
    return await this.$axios.$delete(`questions/${list.id}`)
    .then(res => {
      // $deletelist = state.id
      console.log(res);
      commit('delete',res.data);
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    })
  },
}




