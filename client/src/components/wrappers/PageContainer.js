import React from 'react'
import './wrapper.sass'

const PageContainer = ({children}) => {
    return (
        <div className="PageContainer">
            {
                children
            }
        </div>
    )
}

export default PageContainer