import React, { useRef, useState } from 'react'
import {
  SettingsPageTitle,
  SettingsSubtitle,
} from '../../../../library/components/typography/typography'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-grid-system'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import TextField from '../../../../library/components/inputs/textField/TextField'
import SingleSelect from '../../../../library/components/inputs/textField/Select'
import { provinces } from '../../../../library/constants/locations/provinces'
import { Button, NumberInput, NumberInputField } from '@chakra-ui/react'
import { updateCurrentUser } from '../../userSlice'

const validationSchema = Yup.object({
  firstName: Yup.string().max(100).required(),
  lastName: Yup.string().max(100).required(),
  businessName: Yup.string().max(100).required(),
  mobile: Yup.string().max(100).required(),
  homePhone: Yup.string().max(100),
  addressLine1: Yup.string().max(100),
  addressLine2: Yup.string().max(100),
  city: Yup.object({ value: Yup.string(), label: Yup.string() }).nullable(),
  state: Yup.object({ value: Yup.string(), label: Yup.string() }).nullable(),
  pincode: Yup.string().max(100),
  email: Yup.string()
    .email('Invalid email')
    .max(100, 'Max length is 100 characters')
    .required('Field is required'),
})

const ProfileSettings = () => {
  const dispatch = useDispatch()
  const { isParent, isOrganizer } = useSelector(({ auth }) => auth)
  const { data: userData } = useSelector(({ user }) => user)

  const initialValues = {
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    businessName: userData?.businessName || '',
    mobile: userData?.mobile || '',
    homePhone: userData?.homePhone || '',
    addressLine1: userData?.addressLine1 || '',
    addressLine2: userData?.addressLine2 || '',
    city: null,
    state: null,
    pincode: userData?.pincode || '',
    email: userData?.email || '',
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

  const onSubmit = async (values) => {
    console.log(values)
    try {
      await dispatch(updateCurrentUser(values))
    } catch (e) {
      console.error(e)
    }
  }

  const role = isParent ? 'Parent' : isOrganizer ? 'Organizer' : ''
  return (
    <Row>
      <Col md={12} className={'mb-24'}>
        <SettingsPageTitle>{role} Profile Information</SettingsPageTitle>
      </Col>
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
              <Col md={8} className={'mb-32'}>
                <SettingsSubtitle>Account</SettingsSubtitle>
                <Row>
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
                  <Col md={6}>
                    <TextField
                      label={'Business name'}
                      name={'businessName'}
                      placeholder={'Type your business name'}
                    />
                  </Col>
                  <Col md={6}>
                    <TextField
                      name={'email'}
                      label={'Email'}
                      placeholder={'Enter your email'}
                      disabled
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={8} className={'mb-32'}>
                <SettingsSubtitle>Personal Information</SettingsSubtitle>
                <Row>
                  <Col md={6}>gender</Col>
                  <Col md={6}>
                    {/*<NumberInput*/}
                    {/*  value={maxPrice}*/}
                    {/*  min={new Date().getFullYear() - 100}*/}
                    {/*  max={new Date().getFullYear()}*/}
                    {/*  onChange={setMaxPrice}*/}
                    {/*  variant={'unstyled'}*/}
                    {/*  size={'inline'}*/}
                    {/*>*/}
                    {/*  <NumberInputField placeholder={'Enter the number'} />*/}
                    {/*</NumberInput>*/}
                  </Col>
                  <Col md={6}>language</Col>
                  <Col md={6}>currency</Col>
                </Row>
              </Col>
              <Col md={8}>
                <SettingsSubtitle>Contact Information</SettingsSubtitle>
                <Row>
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
                  <Col md={6} offset={{ md: 6 }}>
                    <Button
                      type={'submit'}
                      isDisabled={!fk.isValid}
                      isFullWidth
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Form>
          )
        }}
      </Formik>
    </Row>
  )
}

export default ProfileSettings
