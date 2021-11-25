import { all } from 'redux-saga/effects';
// Imports: Redux Sagas
import { getNewsApi } from './saga/apiService';
import { takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from './types';

// Redux Saga: Root Saga
export function* rootSaga() {

    yield all([
        takeLatest(ACTION_TYPES.GET_NEWS_INITIATED, getNewsApi)
    ]);
};