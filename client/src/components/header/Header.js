import React from 'react'
import Logo from './logo/Logo'
import './header.sass'
import Wrapper from '../wrappers/Wrapper'

const Header = (props) => {
    const classNames = props.withBG ? 'Header Header-BG' : 'Header'
    return (
        <div className={classNames}>
            {
                props.withBG ?
                    <Wrapper>
                        <Logo/>
                    </Wrapper>
                    :
                    <Logo/>
            }
        </div>
    )
}

export default Header