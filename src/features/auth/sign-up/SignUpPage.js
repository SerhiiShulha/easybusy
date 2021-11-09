import React from 'react'
import { Col, Container, Row, Visible } from 'react-grid-system'
import { SectionTitle } from '../../../library/components/typography/typography'
import SignUpForm from './signUpForm/SignUpForm'
import { Divider, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import AuthPageContainer from '../components/AuthPageContainer'

const SignUpPage = () => {
  return (
    <AuthPageContainer>
      <Row>
        <Col md={12}>
          <SectionTitle className={'mb-16 sm:mb-20 text-center'}>
            Sign Up
          </SectionTitle>
        </Col>
      </Row>
      <Row>
        <Col sm={8} md={6} lg={4} offset={{ sm: 2, md: 3, lg: 4 }}>
          <SignUpForm />

          <Visible xs>
            <Divider className={'mt-14 mb-14'} />
            <Flex direction={'column'} align={'center'}>
              <span className={'mb-10'} style={{ fontSize: '1.4rem' }}>
                Already have an account?
              </span>
              <Link
                as={RouterLink}
                variant={'outline'}
                size={'m'}
                to={'/sign-in'}
              >
                Sign In
              </Link>
            </Flex>
          </Visible>
        </Col>
      </Row>
    </AuthPageContainer>
  )
}

export default SignUpPage
