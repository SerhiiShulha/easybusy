import { Form, Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { useLocation } from 'react-router'
import * as Yup from 'yup'
import TextField from '../../../../library/components/inputs/textField/TextField'
import { provinces } from '../../../../library/constants/locations/provinces'
import SingleSelect from '../../../../library/components/inputs/textField/Select'
import { Button, toast, useToast } from '@chakra-ui/react'
import { Redirect } from 'react-router-dom'

const validationSchema = Yup.object({
  role: Yup.string(),
  firstName: Yup.string().max(100).required(),
  lastName: Yup.string().max(100).required(),
  mobile: Yup.string().max(100).required(),
  homePhone: Yup.string().max(100),
  businessName: Yup.string()
    .max(100)
    .when('role', {
      is: (value) => value === 'organizer',
      then: Yup.string().required(),
      otherwise: Yup.string().notRequired(),
    }),
  addressLine1: Yup.string().max(100),
  addressLine2: Yup.string().max(100),
  city: Yup.object({ value: Yup.string(), label: Yup.string() }).nullable(),
  state: Yup.object({ value: Yup.string(), label: Yup.string() }).nullable(),
  pincode: Yup.string().max(100),
})

const SignUpStep2Form = () => {
  const toast = useToast()
  const { state: locationState } = useLocation()

  if (!locationState) {
    return <Redirect to={'/sign-up'} />
  }

  console.log(locationState)

  const initialValues = {
    role: locationState.role,
    firstName: '',
    lastName: '',
    mobile: '',
    homePhone: '',
    businessName: '',
    addressLine1: '',
    addressLine2: '',
    city: null,
    state: null,
    pincode: '',
  }

  const [cities, setCities] = useState([])
  const chosenState = useRef('')

  const handleProvinceChange = async (value) => {
    try {
      const response = await fetch('/citiesByProvince.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data = await response.json()

      !!value && setCities(data[value])
      chosenState.current = value
    } catch (error) {
      console.error(error)
    }
  }

  const registerOrganizer = async (info) => {
    try {
      const response = await fetch(
        'https://easybusycamp.herokuapp.com/rest/user/organizers/register',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(info),
        }
      )

      const responseData = await response.json()

      console.log({ response, responseData })

      if (!response.ok) {
        return toast({
          title: 'Error',
          position: 'bottom-left',
          status: 'error',
        })
      }

      return toast({
        title: 'Success',
        position: 'bottom-left',
        description: 'Check your email to confirm registration',
        status: 'success',
      })
    } catch (e) {
      toast({
        title: 'Error',
        position: 'bottom-left',
        status: 'error',
      })
    }
  }

  const registerParent = async (info) => {
    try {
      const response = await fetch(
        'https://easybusycamp.herokuapp.com/rest/user/parent1/register',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ primaryParent: true, ...info }),
        }
      )

      const responseData = await response.json()
      console.log({ response, responseData })

      if (response.status !== 200) {
        return toast({
          title: 'Error',
          position: 'bottom-left',
          status: 'error',
        })
      }
    } catch (e) {
      toast({
        title: 'Error',
        position: 'bottom-left',
        status: 'error',
      })
    }
  }

  const onSubmit = async (values) => {
    const { email, password, role } = locationState
    const {
      firstName,
      lastName,
      businessName,
      state,
      city,
      addressLine1,
      addressLine2,
      mobile,
      homePhone,
      pincode,
    } = values

    const data = {
      email,
      password,
      firstName,
      lastName,
      mobile,
      homePhone,
    }

    const organizerData = { ...data, businessName }
    const parentData = {
      ...data,
      address: {
        state: state?.value ?? '',
        city: city?.value ?? '',
        addressLine1,
        addressLine2,
        pincode,
      },
    }

    if (role === 'parent') {
      return registerParent(parentData)
    }

    if (role === 'organizer') {
      return registerOrganizer(organizerData)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(fk) => {
        console.log(fk)
        return (
          <Form>
            <Row
              className={locationState.role === 'parent' ? 'mb-14' : 'mb-10'}
            >
              <Col md={6}>
                <TextField
                  label={'First Name'}
                  name={'firstName'}
                  placeholder={'Type your first name'}
                />
              </Col>
              <Col md={6}>
                <TextField
                  label={'Last Name'}
                  name={'lastName'}
                  placeholder={'Type your last name'}
                />
              </Col>
              {locationState.role === 'organizer' && (
                <Col md={12}>
                  <TextField
                    label={'Business name'}
                    name={'businessName'}
                    placeholder={'Type your business name'}
                  />
                </Col>
              )}
              <Col md={6}>
                <TextField
                  label={'Mobile'}
                  name={'mobile'}
                  placeholder={'Type your mobile phone'}
                />
              </Col>
              <Col md={6}>
                <TextField
                  label={'Home Phone'}
                  name={'homePhone'}
                  placeholder={'Type your home phone'}
                />
              </Col>
            </Row>
            {locationState.role === 'parent' && (
              <Row className={'mb-10'}>
                <Col md={12}>
                  <TextField
                    label={'Address line 1'}
                    name={'addressLine1'}
                    placeholder={'Type your address'}
                  />
                </Col>
                <Col md={12}>
                  <TextField
                    label={'Address line 2'}
                    name={'addressLine2'}
                    placeholder={'Type your address'}
                  />
                </Col>
                <Col md={6}>
                  <SingleSelect
                    label={'City'}
                    name={'city'}
                    placeholder={'Select your city'}
                    options={cities}
                    isDisabled={!chosenState.current}
                  />
                </Col>
                <Col md={6}>
                  <SingleSelect
                    label={'Province'}
                    name={'state'}
                    placeholder={'Select your province'}
                    options={provinces}
                    afterChange={(value) => {
                      if (value !== chosenState.current) {
                        fk.setFieldValue('city', initialValues.city)
                      }
                      handleProvinceChange(value)
                    }}
                  />
                </Col>
                <Col md={12}>
                  <TextField
                    label={'ZIP code'}
                    name={'zipcode'}
                    placeholder={'Type your ZIP code'}
                  />
                </Col>
              </Row>
            )}
            <Row>
              <Col md={6} offset={{ md: 6 }}>
                <Button type={'submit'} isDisabled={!fk.isValid} isFullWidth>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignUpStep2Form
