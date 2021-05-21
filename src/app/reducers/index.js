import {lineReducer} from './lineReducer'
import {combineReducers} from "redux"

export const mega = combineReducers({
    line: lineReducer,
    // order: directionReducer
}) 