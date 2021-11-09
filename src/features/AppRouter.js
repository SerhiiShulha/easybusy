import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import PageNotFound from './404'
import SignInPage from './auth/sign-in/SignInPage'
import SignUpPage from './auth/sign-up/SignUpPage'
import NavContainer from '../library/components/layout/nav/NavContainer'
import SignUpStep2Page from './auth/sign-up/SignUpStep2Page'
import { getToken } from '../library/utils/networking/token'
import PrivateRoute from '../library/utils/PrivateRoute'
import NavAuthorized from '../library/components/layout/nav/NavAuthorized'
import NavNotAuthorized from '../library/components/layout/nav/NavNotAuthorized'
import CampsSearchPage from './campsSearch/CampsSearchPage'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../library/store/configureStore'
import ProfilePage from './profile/profilePage'
import {
  BASE,
  CALENDAR,
  CHILDREN_ENROLLMENT,
  CHILDREN_LIST,
  POSTED_CAMPS,
  PROFILE_SETTINGS,
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_2,
} from '../library/constants/routes'
import Footer from '../library/components/layout/footer/Footer'
import styled from '@emotion/styled'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const AppRouter = () => {
  const { isAuthorized, userId, isOrganizer } = useSelector(
    ({ auth }) => auth,
    shallowEqual
  )

  return (
    <PageContainer>
      <BrowserRouter>
        {!isAuthorized ? <NavNotAuthorized /> : <NavAuthorized />}
        <Switch>
          <Route exact path={BASE}>
            <Home />
          </Route>

          <Route exact path={SIGN_IN}>
            <SignInPage />
          </Route>
          <Route exact path={SIGN_UP}>
            <SignUpPage />
          </Route>
          <Route exact path={SIGN_UP_2}>
            <SignUpStep2Page />
          </Route>

          <Route exact path={'/search'}>
            <CampsSearchPage />
          </Route>

          <PrivateRoute
            path={[
              PROFILE_SETTINGS,
              CHILDREN_ENROLLMENT,
              CALENDAR,
              POSTED_CAMPS,
              CHILDREN_LIST,
            ]}
          >
            <ProfilePage />
          </PrivateRoute>
          <Route path={'*'}>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </PageContainer>
  )
}

export default AppRouter
