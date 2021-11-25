import { ACTION_TYPES } from "../types";

const initialState = {
    loader: false,
    newsList: [],
    totalResults: 0
};

const newsReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case ACTION_TYPES.GET_NEWS_INITIATED:
            return {
                ...state,
                loader: true,
                newsList: [],
                totalResults: 0
            }

        case ACTION_TYPES.GET_NEWS_ERROR:
            return {
                ...state,
                loader: false,
                newsList: action.value,
                totalResults: 0
            }

        case ACTION_TYPES.GET_NEWS_SUCCESS:
            return {
                ...state,
                loader: false,
                newsList: action.value?.articles,
                totalResults: action.value?.totalResults
            }
        default: {
            return state;
        }
    }
};

export default newsReducer;