import React from 'react'
import RectangleBG from '../components/rectangleBG/RectangleBG'
import Header from '../components/header/Header'
import HomeDescription from '../components/home/description/HomeDescription'
import Wrapper from '../components/wrappers/Wrapper'
import HomeInfo from '../components/home/info/HomeInfo'
import EmailInput from '../components/home/emailInput/EmailInput'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <Wrapper BG={<RectangleBG/>}>
            <Header/>
            <HomeDescription/>
            <HomeInfo/>
            <EmailInput/>
            <Footer/>
        </Wrapper>
    )
}

export default Home