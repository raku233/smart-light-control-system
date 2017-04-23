export const bindCheckAuth = store => {
    console.log(store.getState());
    const auth = store.getState().Authentication;

    return (nextState, replace) => {
        replace({ pathname: '/login' });
    };
};
