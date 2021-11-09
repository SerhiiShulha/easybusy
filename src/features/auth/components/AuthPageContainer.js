import React from 'react'
import { Container } from 'react-grid-system'
import styled from '@emotion/styled'
import { mq } from '../../../library/constants/styles'
import { getToken } from '../../../library/utils/networking/token'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PageContainer = styled(Container)`
  padding-top: 20rem;
  padding-bottom: 15rem;

  ${mq.xs} {
    padding-top: 11rem;
    padding-bottom: 8.5rem;
  }
`

const AuthPageContainer = ({ children }) => {
  const token = getToken()
  const { isAuthorized } = useSelector(({ auth }) => auth)

  if (isAuthorized) {
    return <Redirect to={'/'} />
  }

  return <PageContainer>{children}</PageContainer>
}

export default AuthPageContainer