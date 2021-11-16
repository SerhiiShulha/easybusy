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
import * as routes from '../library/constants/routes'
import Footer from '../library/components/layout/footer/Footer'
import styled from '@emotion/styled'
import CampPage from './camp/campPage'
import CampFormPage from './camp/subpages/campFormPage'

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
        <div>
          {!isAuthorized ? <NavNotAuthorized /> : <NavAuthorized />}
          <Switch>
            <Route exact path={routes.BASE}>
              <Home />
            </Route>

            <Route exact path={routes.SIGN_IN}>
              <SignInPage />
            </Route>
            <Route exact path={routes.SIGN_UP}>
              <SignUpPage />
            </Route>
            <Route exact path={routes.SIGN_UP_2}>
              <SignUpStep2Page />
            </Route>

            <Route exact path={routes.CAMPS_SEARCH}>
              <CampsSearchPage />
            </Route>

            <Route exact path={routes.CAMP}>
              <CampPage />
            </Route>

            <PrivateRoute
              path={[
                routes.PROFILE_SETTINGS,
                routes.CHILDREN_ENROLLMENT,
                routes.CALENDAR,
                routes.POSTED_CAMPS,
                routes.CHILDREN_LIST,
              ]}
            >
              <ProfilePage />
            </PrivateRoute>

            <PrivateRoute path={[routes.CAMP_CREATE, routes.CAMP_EDIT]}>
              <CampFormPage />
            </PrivateRoute>
            <Route path={'*'}>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </PageContainer>
  )
}

export default AppRouter
