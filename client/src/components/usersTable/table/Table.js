import React, {useState} from 'react'
import './table.sass'
import {tableColumnsConst} from './tableConst'
import {Link} from 'react-router-dom'

const Table = ({usersList}) => {
    const [active, setActive] = useState(null)

    return (
        <div className="Table-container">
            {
                Object.keys(tableColumnsConst).map(column => (
                    <div key={column} className="Table-column">
                        <div className="Column-top">{tableColumnsConst[column]}</div>
                        {
                            <div className="Column-content">
                                {
                                    usersList.map((user,idx) => (
                                        <Link onMouseEnter={() => setActive(idx)}
                                              onMouseLeave={() => setActive(null)}
                                              key={user+idx}
                                              to={`/usersStats/${user.id}`}
                                              className="Column-content"
                                              style={active === idx ? {backgroundColor: '#c6c6c6'} : {}}
                                        >
                                            {user[column]}
                                        </Link>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Table