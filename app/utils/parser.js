export const parseParam = param => {
    if (typeof param === 'object') {
        return JSON.stringify(param);
    }
};