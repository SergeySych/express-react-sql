import React from 'react'
import {fillMissingDay} from '../../helper'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './statsContainer.sass'
import DateInput from './dateInput/DateInput'
import UsersChart from './usersChart/UsersChart'

const StatsContainer = ({usersStats}) => {

    let dataClicks = usersStats && fillMissingDay(usersStats.stats, 'clicks', usersStats.from, usersStats.to)
    let dataPageViews = usersStats && fillMissingDay(usersStats.stats, 'page_views', usersStats.from, usersStats.to)
    const fullName = usersStats?.user ? `${usersStats.user.first_name} ${usersStats.user.last_name}` : ' '

    return (
        usersStats &&
        <div className="StatsContainer">
            <div className="StatsContainer-top">
                <h2>{fullName}</h2>
                <DateInput
                    usersStats={usersStats}
                />
            </div>
            <div className="StatsContainer-content">
                <div>
                    <UsersChart
                        chartId="Clicks"
                        usersStats={dataClicks}
                    />
                </div>
                <div>
                    <UsersChart
                        chartId="Views"
                        usersStats={dataPageViews}
                    />
                </div>
            </div>
        </div>
    )
}

export default StatsContainer