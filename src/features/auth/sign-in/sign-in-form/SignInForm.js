import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import TextField from '../../../../library/components/inputs/textField/TextField'
import { Button, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { authorize, signIn } from '../../authSlice'
import { useLazyGetCurrentUserQuery } from '../../../profile/userAPI'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .max(100, 'Max length is 100 characters')
    .required('Field is required'),
  password: Yup.string()
    .max(100, 'Max length is 100 characters')
    .required('Field is required'),
})

const SignInForm = () => {
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (values) => {
    try {
      await dispatch(signIn(values))
    } catch (e) {
      console.error('error', e)
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
            className={'mb-8 sm:mb-10'}
          >
            Sign In
          </Button>

          <Flex justify={'center'}>
            <Link variant={'text'} size={'text'} to={'/'} as={RouterLink}>
              Forgot Password?
            </Link>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
