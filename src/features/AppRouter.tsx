import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import PageNotFound from './404'
import SignInPage from './auth/sign-in/SignInPage'
import SignUpPage from './auth/sign-up/SignUpPage'
import Nav from '../library/components/layout/nav/Nav'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
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
        <Route exact path={'/sign-up/profile-info'}></Route>
        <Route path={'*'}>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
