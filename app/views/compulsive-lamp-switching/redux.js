import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false
};


export const LOAD_COMPULSIVELAMPSWITCHINGSTATUS = 'LOAD_COMPULSIVELAMPSWITCHINGSTATUS';
export const LOAD_COMPULSIVELAMPSWITCHINGSTATUS_SUCCESS = 'LOAD_COMPULSIVELAMPSWITCHINGSTATUS_SUCCESS';
export const LOAD_COMPULSIVELAMPSWITCHINGSTATUS_ERROR = 'LOAD_COMPULSIVELAMPSWITCHINGSTATUS_ERROR';


function viewData(state = initialState, action) {
    switch (action.type) {
    default: {
        return {
            ...state
        };
    }
    }
}

export default combineReducers({
    viewData
});

export const actions = {
};