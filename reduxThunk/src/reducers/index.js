import {combineReducers} from 'redux'
import apiReducer from './apiReducer'
const rootReducer=combineReducers({
    todoAPI: apiReducer
})

export default rootReducer