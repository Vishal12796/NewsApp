
import { combineReducers } from 'redux';

import newsReducer from './reducers/newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;