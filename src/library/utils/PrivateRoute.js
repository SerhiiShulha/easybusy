import React from 'react'
import { getToken } from './networking/token'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ path, children }) => {
  const { isAuthorized } = useSelector(({ auth }) => auth)

  return (
    <Route
      exact
      path={path}
      render={({ location }) =>
        !!isAuthorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
