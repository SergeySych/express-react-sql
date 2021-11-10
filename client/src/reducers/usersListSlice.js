import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getUsersListFetch} from '../api'


export const getUsersList = createAsyncThunk(
    'usersListSlice/getUsersList',
    ({page, count}) => getUsersListFetch(page, count)
)


export const usersListSlice = createSlice({
    name: 'usersList',
    initialState: {
        usersList: null,
        pagesLength: null,
        fetching: false,
        rejected: false
    },
    reducers: {
        resetUserList(state) {
            state.usersList = null
            state.pagesLength = null
            state.fetching = false
            state.rejected = false
        }
    },
    extraReducers: {
        [getUsersList.pending]: (state) => {
            state.usersList = null
            state.pagesLength = null
            state.fetching = true
            state.rejected = false
        },
        [getUsersList.fulfilled]: (state, action) => {
            state.fetching = false
            state.usersList = action.payload.usersList
            state.pagesLength = action.payload.pagesLength
        },
        [getUsersList.rejected]: (state) => {
            state.fetching = false
            state.rejected = true
        }
    }
})
export const {resetUserList} = usersListSlice.actions
export const usersListSelector = state => state.usersListSelector
export default usersListSlice.reducer