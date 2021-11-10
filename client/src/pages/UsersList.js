import React, {useEffect} from 'react'
import Header from '../components/header/Header'
import Wrapper from '../components/wrappers/Wrapper'
import Footer from '../components/footer/Footer'
import Navigate from '../components/navigate/Navigate'
import {useLocation, useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {getUsersList, resetUserList, usersListSelector} from '../reducers/usersListSlice'
import UsersTable from '../components/usersTable/UsersTable'
import Spinner from '../components/spinner/Spinner'
import PageWrapper from '../components/wrappers/PageWrapper'
import PageContainer from '../components/wrappers/PageContainer'

const UsersList = () => {
    let {page} = useParams()
    page = Number(page)
    const count = useLocation().search.split('=')[1]

    const {usersList, pagesLength, fetching, rejected} = useSelector(usersListSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersList({page, count}))

        return function () {
            dispatch(resetUserList())
        }
    }, [dispatch, page, count])

    return (
        <PageContainer>
            <PageWrapper>
                <Header withBG/>
                <Wrapper>
                    <Navigate page={page}/>
                    {
                        fetching ?
                            <Spinner/>
                        :
                            rejected ?
                                <div>Wrong page</div>
                                :
                                usersList &&
                                    <UsersTable
                                        usersList={usersList}
                                        pagesLength={pagesLength}
                                        page={page}
                                        count={count}
                                    />
                    }
                </Wrapper>
            </PageWrapper>
            <Footer withBG/>
        </PageContainer>
    )
}

export default UsersList