import {combineReducers} from 'redux'
import usersListSlice from './usersListSlice'
import usersStatsSlice from './usersStatsSlice'

export const rootReducer = combineReducers({
    usersListSelector: usersListSlice,
    usersStatsSelector: usersStatsSlice
})