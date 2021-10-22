import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import TextField from '../../../../library/components/inputs/textField/TextField'
import { Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

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

const SignInForm: React.FC = () => {
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
          <Button isFullWidth type={'submit'} className={'mb-10'}>
            Sign In
          </Button>

          <Link
            variant={'text'}
            size={'text'}
            to={''}
            as={RouterLink}
            className={'mb-10 flex'}
          >
            Forgot Password?
          </Link>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm
