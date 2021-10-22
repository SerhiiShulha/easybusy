import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import TextField from '../../../../library/components/inputs/textField/TextField'
import { Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { colors } from '../../../../library/constants/styles'

const RoleSwitcher = styled.div`
  display: flex;
  width: 100%;
  height: 5.2rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  background-color: ${colors.input};
`

const Switcher = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 1rem;
  font-weight: 600;
  color: ${(props) => (props.isActive ? '#fff' : 'inherit')};
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
  const [role, setRole] = useState('parent')

  const initialValues: FormValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values: FormValues) => {
    try {
      console.log(values)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
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
          <Button isFullWidth type={'submit'} className={'mb-12'}>
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
