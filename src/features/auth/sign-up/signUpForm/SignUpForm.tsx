import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import TextField from '../../../../library/components/inputs/textField/TextField'
import { Button, Divider } from '@chakra-ui/react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { colors, mq } from '../../../../library/constants/styles'
import { Visible } from 'react-grid-system'
import { useLocation } from 'react-router'

const RoleSwitcher = styled.div`
  display: flex;
  width: 100%;
  height: 5.2rem;
  margin-bottom: 4rem;
  border-radius: 0.6rem;
  background-color: ${colors.input};

  ${mq.xs} {
    height: 4.3rem;
  }
`

const Switcher = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 0.6rem;
  font-weight: 600;
  color: ${(props) => (props.isActive ? '#fff' : colors.text40)};
  background-color: ${(props) =>
    props.isActive ? colors.primary : 'transparent'};
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: ${(props) => (props.isActive ? '#fff' : colors.primary)};
  }
`

const BottomLinkContainer = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`

const TextLink = styled(RouterLink)`
  color: ${colors.primary};
  text-decoration: underline;
`

interface FormValues {
  email: string
  password: string
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .max(100, 'Max length is 100 characters')
    .required('Field is required'),
  password: Yup.string()
    .max(100, 'Max length is 100 characters')
    .required('Field is required'),
})

const SignUpForm: React.FC = () => {
  const { state } = useLocation<{
    email: string
    password: string
    role: 'parent' | 'organizer'
  }>()
  const history = useHistory()
  const [role, setRole] = useState(state?.role || 'parent')

  const initialValues: FormValues = {
    email: state?.email || '',
    password: state?.password || '',
  }

  const onSubmit = (values: FormValues) => {
    try {
      console.log(values)
      history.push({
        pathname: '/sign-up/step-2',
        state: { ...values, role },
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(fk) => (
        <Form>
          <RoleSwitcher>
            <Switcher
              isActive={role === 'parent'}
              onClick={() => setRole('parent')}
            >
              <span>Parent</span>
            </Switcher>
            <Switcher
              isActive={role === 'organizer'}
              onClick={() => setRole('organizer')}
            >
              <span>Organizer</span>
            </Switcher>
          </RoleSwitcher>
          <TextField
            name={'email'}
            label={'Email'}
            placeholder={'Enter your email'}
          />
          <TextField
            name={'password'}
            label={'Password'}
            placeholder={'Enter your password'}
            type={'password'}
            mb={'5rem'}
          />
          <Button
            type={'submit'}
            isDisabled={!fk.isValid}
            isFullWidth
            className={'mb-12'}
          >
            Sign Up
          </Button>

          <BottomLinkContainer>
            By clicking “Sign Up” you accept our{' '}
            <TextLink to={'/'}>Terms of Usage</TextLink>
          </BottomLinkContainer>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
