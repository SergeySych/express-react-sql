import axios from 'axios'
import {GET_USERS_LIST_ROUTE, GET_USERS_STATS_ROUTE} from './fetchConsts'

export const getUsersListFetch = (page, count = 50) => {
    return axios.get(GET_USERS_LIST_ROUTE + page + `?count=${count}`)
        .then(data => data.data)
}

export const getUsersStatsFetch = (id, from = '2019-10-12', to = '2019-10-19') => {
    return axios.get(`${GET_USERS_STATS_ROUTE + id}?from=${from}&to=${to}`)
        .then(data => data.data)
}