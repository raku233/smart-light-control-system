export const parseParam = param => {
    if (typeof param === 'object') {
        return JSON.stringify(param);
    }
};

export const getCookie = str => {
    if (!str) return {};

    const ca = str.split(';');
    const cookie = {};
    for (const item of ca) {
        const [key, value] = item.split('=');
        cookie[key] = value;
    }

    return cookie;
};

export const parseCookie = cookie => {
    let str = '';
    for (const key in cookie) {
        str += `${key}=${cookie[key]};`;
    }

    return str;
};