import React from 'react'
import './footer.sass'
import Wrapper from '../wrappers/Wrapper'

const Footer = (props) => {

    return (
        props.withBG ?
            <div className="Footer-withBG">
                <Wrapper>
                    <div className="Footer">
                        <h2>AppCo</h2>
                        <p>All rights reserved by ThemeTags</p>
                        <p>Copyrights © 2019. </p>
                    </div>
                </Wrapper>
            </div>
            :
                <div className="Footer">
                    <h2>AppCo</h2>
                    <p>All rights reserved by ThemeTags</p>
                    <p>Copyrights © 2019. </p>
                </div>
    )
}

export default Footer