export default function({store, redirect}) {
    if (!store.getters['auth/USER_IS_LOGGED']) {
        return redirect('/login');
    }
}
