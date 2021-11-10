import React from 'react'
import './homeDescription.sass'
import {Link} from 'react-router-dom'

const HomeDescription = () => {
    return (
        <div className="Home-description">
            <div className="Home-description-info">
                <h2><b>Brainstorming</b> for desired perfect Usability</h2>
                <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                <Link to="/usersList/1?count=50"><p>Views Stats</p></Link>
            </div>
            <div className="Home-description-img">
                <img src="/img/mobile.png" alt="phone"/>
            </div>
        </div>
    )
}

export default HomeDescription