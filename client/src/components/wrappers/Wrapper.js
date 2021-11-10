import React from 'react'
import './wrapper.sass'

const Wrapper = ({BG, children}) => {
    return (
        <div className="Wrapper">
            {
                BG && BG
            }
            <div className="Container">
                {
                    children
                }
            </div>
        </div>
    )
}

export default Wrapper