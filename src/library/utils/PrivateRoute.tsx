import React from 'react'
import { getToken } from './networking/token'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  path: string
}

const PrivateRoute: React.FC<Props> = ({ path, children }) => {
  const token = getToken()
  return (
    <Route
      exact
      path={path}
      render={({ location }) =>
        !!token ? (
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
