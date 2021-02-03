import { add, del } from './actionTypes';
import mine from './reducers/mine';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    mine
})


export default reducer;