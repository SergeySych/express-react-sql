import React from 'react'
import './homeInfo.sass'

const HomeInfo = () => {
    return (
        <div className="Home-info">
            <h2>Why <b>small business owners love</b> AppCo?</h2>
            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            <div className="Cards">
                <div className="Cards-item">
                    <div>
                        <img src="img/Group 13.png" alt="Clean Design"/>
                        <h3>Clean Design</h3>
                        <p>Increase sales by showing true dynamics of your website.</p>
                    </div>
                </div>
                <div className="Cards-item">
                    <div>
                        <img src="img/Group 14.png" alt="Secure Data"/>
                        <h3>Secure Data</h3>
                        <p>Build your online store’s trust using Social Proof & Urgency.</p>
                    </div>
                </div>
                <div className="Cards-item">
                    <div>
                        <img src="img/Group 15.png" alt="Retina Ready"/>
                        <h3>Retina Ready</h3>
                        <p>Realize importance of social proof in customer’s purchase decision.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo