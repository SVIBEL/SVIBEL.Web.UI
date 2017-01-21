import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';


const rootReducer = combineReducers({
    routing
});

export default rootReducer;