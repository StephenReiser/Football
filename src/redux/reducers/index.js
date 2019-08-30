// this is the rootreducer file

import { combineReducers } from 'redux';
import footballReducer from './footballReducer'


export default combineReducers({
    football: footballReducer
})
