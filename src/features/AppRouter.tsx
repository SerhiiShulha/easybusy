import React from 'react'
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

const AppRouter = () => {
  const token = getToken()
  console.log('token', token)
  return (
    <BrowserRouter>
      {!token ? <NavNotAuthorized /> : <NavAuthorized />}
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path={'/sign-in'}>
          <SignInPage />
        </Route>
        <Route exact path={'/sign-up'}>
          <SignUpPage />
        </Route>
        <Route exact path={'/sign-up/step-2'}>
          <SignUpStep2Page />
        </Route>

        <PrivateRoute path={'/user'}>
          <h1>User page</h1>
        </PrivateRoute>
        <Route path={'*'}>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
