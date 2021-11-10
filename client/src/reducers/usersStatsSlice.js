import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getUsersStatsFetch} from '../api'


export const getUsersStats = createAsyncThunk(
    'usersStatsSlice/getUsersList',
    ({id, from, to}) => getUsersStatsFetch(id, from, to)
)


export const usersStatsSlice = createSlice({
    name: 'usersStats',
    initialState: {
        usersStats: null,
        fetching: false,
        rejected: false
    },
    reducers: {
        resetUserStats(state) {
            state.usersStats = null
            state.fetching = false
            state.rejected = false
        }
    },
    extraReducers: {
        [getUsersStats.pending]: (state) => {
            state.usersStats = null
            state.fetching = true
            state.rejected = false
        },
        [getUsersStats.fulfilled]: (state, action) => {
            state.fetching = false
            state.usersStats = action.payload
        },
        [getUsersStats.rejected]: (state) => {
            state.fetching = false
            state.rejected = true
        }
    }
})

export const {resetUserStats} = usersStatsSlice.actions
export const usersStatsSelector = state => state.usersStatsSelector
export default usersStatsSlice.reducer