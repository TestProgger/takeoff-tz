export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  }
}

export const actions = {
  async login({commit} , {username , password}){
    commit('setToken', username + password);
  },
  async logout({commit}){
    commit('setToken' , null);
  }
}

export const getters = {
  authorized: state => !!state.token
}
