import React from 'react'
import './emailInput.sass'

const EmailInput = () => {
    return (
        <div className="Email-input">
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" placeholder="Enter your email"/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default EmailInput