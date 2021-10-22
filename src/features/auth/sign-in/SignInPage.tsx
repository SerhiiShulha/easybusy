import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { SectionTitle } from '../../../library/components/typography/typography'
import SignInForm from '../components/sign-in-form/SignInForm'

const SignInPage: React.FC = () => {
  return (
    <Container className={'pt-44 sm:pt-80'}>
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
        </Col>
      </Row>
    </Container>
  )
}

export default SignInPage
