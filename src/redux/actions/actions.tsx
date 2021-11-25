import { ACTION_TYPES } from "../types";

export const getNews = payload => ({
    type: ACTION_TYPES.GET_NEWS_INITIATED,
    payload
})