import React from 'react'
import './wrapper.sass'

const PageWrapper = ({children}) => {
    return (
        <div className="PageWrapper">
            {
                children
            }
        </div>
    )
}

export default PageWrapper