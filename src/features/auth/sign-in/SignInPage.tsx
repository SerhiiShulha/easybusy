import React from 'react'
import { Col, Container, Row, Visible } from 'react-grid-system'
import { SectionTitle } from '../../../library/components/typography/typography'
import SignInForm from './sign-in-form/SignInForm'
import { Divider, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import AuthPageContainer from '../components/AuthPageContainer'

const SignInPage: React.FC = () => {
  return (
    <AuthPageContainer>
      <Row>
        <Col md={12}>
          <SectionTitle className={'mb-16 sm:mb-20 text-center'}>
            Sign In
          </SectionTitle>
        </Col>
      </Row>
      <Row>
        <Col md={4} offset={{ md: 4 }}>
          <SignInForm />

          <Visible xs>
            <Divider className={'mt-14 mb-14'} />
            <Flex direction={'column'} align={'center'}>
              <span className={'mb-10'} style={{ fontSize: '1.4rem' }}>
                Don’t have an account yet?
              </span>
              <Link
                as={RouterLink}
                variant={'outline'}
                size={'m'}
                to={'/sign-up'}
              >
                Sign Up
              </Link>
            </Flex>
          </Visible>
        </Col>
      </Row>
    </AuthPageContainer>
  )
}

export default SignInPage
