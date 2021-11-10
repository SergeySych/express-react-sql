import React from 'react'
import './usersTable.sass'
import Table from './table/Table'
import Pagination from './pagination/Pagination'

const UsersTable = ({usersList, pagesLength, page, count}) => {
    return (
        <div className="UsersTable-container">
            <h2>Users statistics</h2>
            <Table usersList={usersList}/>
            <Pagination
                pagesLength={pagesLength}
                activePage={page}
                count={count}
            />
        </div>
    )
}

export default UsersTable