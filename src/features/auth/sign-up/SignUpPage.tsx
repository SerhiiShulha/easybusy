import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { SectionTitle } from '../../../library/components/typography/typography'
import SignUpForm from '../components/signUpForm/SignUpForm'

const SignUpPage: React.FC = () => {
  return (
    <Container className={'pt-80'}>
      <Row>
        <Col md={12}>
          <SectionTitle className={'mb-20 text-center'}>Sign Up</SectionTitle>
        </Col>
      </Row>
      <Row>
        <Col sm={8} md={6} lg={4} offset={{ sm: 2, md: 3, lg: 4 }}>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpPage
