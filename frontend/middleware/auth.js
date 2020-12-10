export default function ({ store, redirect }) {
    
    if(store.getters.getToken)
        store.dispatch('refreshLogin', {cb: (user) => {
            console.log("authorized user:");
            console.log(user);
            if(!user) return redirect('/');
        }});
    else if(!store.getters.getToken) redirect('/');
}