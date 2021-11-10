import React from 'react'
import {Link} from 'react-router-dom'
import './navigate.sass'
import Arrow from './Arrow'
import {useSelector} from 'react-redux'
import {usersStatsSelector} from '../../reducers/usersStatsSlice'

const Navigate = () => {
    const {usersStats} = useSelector(usersStatsSelector)
    const user = usersStats?.user ? `${usersStats.user.first_name} ${usersStats.user.last_name}` : ' '

    return (
        <div className="Navigate">
            <Link to="/">Main page</Link>
            <Arrow/>
            <Link to="/usersList/1?count=50"
                className={!user ? 'Active-nav' : ''}>
                Users statistics
            </Link>
            {
                user &&
                [
                    <Arrow key={user}/>,
                    <div key={user+user}
                         className="Active-nav">
                        {user ? user : 'User'}
                    </div>
                ]
            }
        </div>
    )
}

export default Navigate