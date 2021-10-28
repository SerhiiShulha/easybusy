import React from 'react'
import { Col, Container, Row, Visible } from 'react-grid-system'
import { SectionTitle } from '../../../library/components/typography/typography'
import SignUpForm from './signUpForm/SignUpForm'
import { Divider, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import SignUpStep2Form from './signUpStep2Form/SignUpStep2Form'
import { colors } from '../../../library/constants/styles'
import AuthPageContainer from '../components/AuthPageContainer'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { useLocation } from 'react-router'

const SignUpStep2Page: React.FC = () => {
  const { state } = useLocation()
  return (
    <AuthPageContainer>
      <Row>
        <Col md={12} className={'mb-14'}>
          <Link
            variant={'text'}
            as={RouterLink}
            to={{
              pathname: '/sign-up',
              state,
            }}
          >
            <HiOutlineChevronLeft className={'mr-4'} />
            <span>Back</span>
          </Link>
        </Col>
        <Col md={12} className={'text-center'}>
          <SectionTitle className={'mb-16 sm:mb-20'}>Account</SectionTitle>
          <p style={{ color: colors.text80 }} className={'mb-16 sm:mb-24'}>
            Please fill all the info to complete your registration
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={8} md={6} offset={{ sm: 2, md: 3 }}>
          <SignUpStep2Form />
        </Col>
      </Row>
    </AuthPageContainer>
  )
}

export default SignUpStep2Page
