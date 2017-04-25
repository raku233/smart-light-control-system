import { parseParam } from './parser';

export function dataFetcher(url) {
    return async (param) => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'same-origin',
            credentials: 'same-origin',
            body: parseParam(param)
        }).then(res => res.json());
    };
}
