import { put } from 'redux-saga/effects';
import { useAxios } from '../../api/apiClient';
import { ACTION_TYPES } from '../types';

export function* getNewsApi(data: any) {

    try {
        let newsData: any = yield useAxios(data?.payload?.data)
        if (newsData) {
            yield put({ type: ACTION_TYPES.GET_NEWS_SUCCESS, value: newsData, });
        } else {
            yield put({ type: ACTION_TYPES.GET_NEWS_ERROR, value: newsData, });
        }
    } catch (error) {
        console.log("Get News Api Error : ", error)
        yield put({ type: ACTION_TYPES.GET_NEWS_ERROR, value: [] });
    }
}
