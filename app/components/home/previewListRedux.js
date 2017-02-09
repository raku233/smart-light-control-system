const initialState = {
    loading: true,
    error: false,
    articleList: []
};

export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLE_ERROR';

export function loadArticles() {
    return {
        type: LOAD_ARTICLES,
        payload: {
            url: '/api/articles'
        }
    };
}

export function loadArticlesSuccess(articleList) {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: {
            articleList
        }
    };
}

export function loadArticlesError(error) {
    return {
        type: LOAD_ARTICLES_ERROR,
        payload: {
            error
        }
    }
}

function previewList(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_ARTICLES_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload.articleList
            }
        }

        case LOAD_ARTICLES_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            };
        }

        default:
            return state;
    }
}

export default previewList;
