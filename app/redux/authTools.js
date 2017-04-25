import { getCookie } from '../utils/parser';

export const bindCheckAuth = store => {
    const { userType } = getCookie(document.cookie);
    const { isLogin } = store.getState().Login;

    return (nextState, replace) => {
        if (isLogin || userType === 'admin') return;
        replace({ pathname: '/login' });
    };
};
