import fetch from 'isomorphic-fetch';

export async function fetchArticleList(url) {
    return await fetch(url).then(res => res.json());
}