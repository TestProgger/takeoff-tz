
export const state = ()=>({
  contacts: null
});

export const mutations = {
  setContacts(state,contact){
    state.contacts = contact;
  },
  delContact(state , id){
    for(let i = 0; i < state.contacts.length ;i++){
      if( state.contacts[i].id == id ){
        state.contacts.splice(i , 1);
        break;
      }
    }
  },
  addContact( state , contact ){
    contact.id = state.contacts.length
    state.contacts.push({...contact})
  },
  editContact(state , contact){
    for( let i = 0; i < state.contacts.length ; i++ ){
      if( state.contacts[i].id == contact.id ){
        state.contacts[i] = contact
      }
    }
  }
}

export const actions = { 
  async fetch({commit}){ 
   const contact =  await this.$axios.get('https://jsonplaceholder.typicode.com/users')
    commit('setContacts', contact.data);
  },
  async delContact({commit} , id){
    commit( 'delContact' , id )
  },
  async addContact({commit} , contact){
    commit( 'addContact' , contact )
  },
  async editContact({commit} , contact){
    commit( 'editContact' , contact)
  }
}

export const getters = {
  contacts: state => state.contacts
}
