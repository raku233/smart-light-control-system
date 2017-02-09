import { combineReducers } from 'redux';

import list, { loadArticles } from '../../components/home/previewListRedux';

export default combineReducers({
    list
});

export const actions = {
    listActions: {
        loadArticles
    }
};