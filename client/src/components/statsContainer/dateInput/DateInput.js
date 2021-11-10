import React, {useState} from 'react'
import './dateInput.sass'
import {DateRange} from 'react-date-range'
import {getUsersStats} from '../../../reducers/usersStatsSlice'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router'


const DateInput = ({usersStats}) => {
    const dispatch = useDispatch()
    let {id} = useParams()

    const [showCalendar, setShowCalendar] = useState(false)
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(usersStats.from),
            endDate: new Date(usersStats.to),
            key: 'selection'
        }
    ])

    const handleSubmitCalendar = () => {
        setShowCalendar(false)
        dispatch(getUsersStats({
            id,
            from: dateRange[0].startDate.toISOString().split('T')[0],
            to: dateRange[0].endDate.toISOString().split('T')[0]
        }))
    }
    return (
        <div className="Calendar-container">
            <div className="Calendar-select"
                 onClick={() => setShowCalendar(prev => !prev)}
            >
                <p>Select date range</p>
                <div className="Calendar-prev">
                    <img src="/img/calendar.png" alt="calendar"/>
                    <span>
                        {
                            `${usersStats.from}
                            - 
                            ${usersStats.to}`
                        }
                    </span>
                </div>
            </div>
            {
                showCalendar &&
                <div className="Calendar-popup">
                    <img src="/img/Rectangle 302.png" alt="popUp"/>
                    <div className="Calendar-popup-content">
                        <div className="Calendar-popup-content-wrapper">
                            <div className="Calendar-popup-content-buttons">
                                <button onClick={handleSubmitCalendar}>Apply</button>
                                <p>or</p>
                                <button onClick={() => setShowCalendar(false)}>Cancel</button>
                            </div>
                            <div>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDateRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DateInput