import { combineReducers } from 'redux';
import commonReducer from './common';
import cinemaReducer from './cinema';
import userReducer from './user'

export default combineReducers({
    common: commonReducer,
    cinema: cinemaReducer,
    user: userReducer
})