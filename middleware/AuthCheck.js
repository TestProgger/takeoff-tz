export default function({store, redirect}){
  if(!store.getters.authorized){
    redirect('/login?require=login');
  }
}
