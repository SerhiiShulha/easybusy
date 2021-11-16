import React, { useState } from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentUser } from '../../../userSlice'
import { Form, Formik } from 'formik'
import { Col, Row } from 'react-grid-system'
import TextField from '../../../../../library/components/inputs/textField/TextField'
import { Button } from '@chakra-ui/react'
import { SettingsSubtitle } from '../../../../../library/components/typography/typography'

const validationSchema = Yup.object({
  isOrganizer: Yup.boolean(),
  firstName: Yup.string().max(100).required(),
  lastName: Yup.string().max(100).required(),
  businessName: Yup.string().when('isOrganizer', {
    is: true,
    then: Yup.string().max(100).required(),
    otherwise: Yup.string().max(100).notRequired(),
  }),
  mobile: Yup.string().max(100).required(),
  homePhone: Yup.string().max(100),
  email: Yup.string().email().max(100).required(),
})

const ProfileInfoSettings = () => {
  const dispatch = useDispatch()
  const { isOrganizer } = useSelector(({ auth }) => auth)
  const { data: userData } = useSelector(({ user }) => user)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initialValues = {
    isOrganizer,
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    businessName: userData?.businessName || '',
    mobile: userData?.mobile || '',
    homePhone: userData?.homePhone || '',
    email: userData?.email || '',
  }

  const onSubmit = async (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      mobile: values.mobile,
      homePhone: values.homePhone,
      businessName: isOrganizer ? values.businessName : undefined,
    }
    try {
      setIsSubmitting(true)
      await dispatch(updateCurrentUser(data))
      setIsSubmitting(false)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <Col md={8} className={'mb-32'}>
      <SettingsSubtitle>Account</SettingsSubtitle>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        {(fk) => {
          return (
            <Form>
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
                {isOrganizer && (
                  <Col md={6}>
                    <TextField
                      label={'Business name'}
                      name={'businessName'}
                      placeholder={'Type your business name'}
                    />
                  </Col>
                )}
                <Col md={6}>
                  <TextField
                    name={'email'}
                    label={'Email'}
                    placeholder={'Enter your email'}
                    disabled
                  />
                </Col>
                <Col md={12}>
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
                  </Row>
                </Col>
                <Col md={6} offset={{ md: 6 }}>
                  <Button
                    type={'submit'}
                    disabled={!fk.isValid}
                    isFullWidth
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    mt={12}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>

              {/*<Col md={8} className={'mb-32'}>*/}
              {/*  <SettingsSubtitle>Personal Information</SettingsSubtitle>*/}
              {/*  <Row>*/}
              {/*    <Col md={6}>*/}
              {/*      <SingleSelect*/}
              {/*        label={'Gender'}*/}
              {/*        name={'gender'}*/}
              {/*        placeholder={'Select gender'}*/}
              {/*        options={genders}*/}
              {/*      />*/}
              {/*    </Col>*/}
              {/*    <Col md={6}>*/}
              {/*      <SingleSelect*/}
              {/*        label={'Year of birth'}*/}
              {/*        name={'yearOfBirth'}*/}
              {/*        placeholder={'Select year'}*/}
              {/*        options={years}*/}
              {/*      />*/}
              {/*    </Col>*/}
              {/*    <Col md={6}>*/}
              {/*      <SingleSelect*/}
              {/*        label={'Currency'}*/}
              {/*        name={'currency'}*/}
              {/*        placeholder={'Select currency'}*/}
              {/*        options={[*/}
              {/*          {*/}
              {/*            value: 'USD',*/}
              {/*            label: 'United States Dollar  -  USD',*/}
              {/*          },*/}
              {/*          {*/}
              {/*            value: 'CAD',*/}
              {/*            label: 'Canadian Dollar  -  CAD',*/}
              {/*          },*/}
              {/*        ]}*/}
              {/*      />*/}
              {/*    </Col>*/}
              {/*  </Row>*/}
              {/*</Col>*/}
            </Form>
          )
        }}
      </Formik>
    </Col>
  )
}

export default ProfileInfoSettings
