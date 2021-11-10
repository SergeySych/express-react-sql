import React, {useEffect} from 'react'
import PageContainer from '../components/wrappers/PageContainer'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PageWrapper from '../components/wrappers/PageWrapper'
import Navigate from '../components/navigate/Navigate'
import Wrapper from '../components/wrappers/Wrapper'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersStats, resetUserStats, usersStatsSelector} from '../reducers/usersStatsSlice'
import {useParams} from 'react-router'
import Spinner from '../components/spinner/Spinner'
import StatsContainer from '../components/statsContainer/StatsContainer' // theme css file

const UserStats = () => {
    let {id} = useParams()
    id = Number(id)

    const {usersStats, fetching, rejected} = useSelector(usersStatsSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersStats({id}))
        
        return function () {
            dispatch(resetUserStats())
        }
    },[dispatch, id])


    return (
        <PageContainer>
            <PageWrapper>
                <Header withBG/>
                <Wrapper>
                    <Navigate/>
                    {
                        fetching ?
                            <Spinner/>
                            :
                            rejected ?
                                <div>User not found</div>
                                :
                                usersStats &&
                                <StatsContainer
                                    usersStats={usersStats}
                                />
                    }
                </Wrapper>
            </PageWrapper>
            <Footer withBG/>
        </PageContainer>
    )
}

export default UserStats