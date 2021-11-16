import React, { useRef, useState } from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { SettingsSubtitle } from '../../../../../library/components/typography/typography'
import { Col, Row } from 'react-grid-system'
import SingleSelect from '../../../../../library/components/inputs/textField/Select'
import { provinces } from '../../../../../library/constants/locations/provinces'
import TextField from '../../../../../library/components/inputs/textField/TextField'
import { Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { updateParentAddress } from '../../../userSlice'

const validationSchema = Yup.object({
  addressLine1: Yup.string().max(100),
  addressLine2: Yup.string().max(100),
  city: Yup.object({ value: Yup.string(), label: Yup.string() }).nullable(),
  state: Yup.object({ value: Yup.string(), label: Yup.string() }).nullable(),
  pincode: Yup.string().max(100),
})

const AddressSettings = () => {
  const { data: userData } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [initialValues, setInitialValues] = useState({
    addressLine1: userData?.address.addressLine1 || '',
    addressLine2: userData?.address.addressLine2 || '',
    city: null,
    state: provinces.find((p) => p.value === userData?.address.stateCode),
    pincode: userData?.address.pincode || '',
  })

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
    const data = {
      id: userData.address.id,
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      city: values.city.value,
      stateName: values.state.label,
      stateCode: values.state.value,
    }
    try {
      console.log(data)
      await dispatch(updateParentAddress(data))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {(fk) => {
        console.log(fk)
        return (
          <Form>
            <Col md={8}>
              <SettingsSubtitle>Address</SettingsSubtitle>
              <Row>
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
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <TextField
                        label={'ZIP code'}
                        name={'pincode'}
                        placeholder={'Type your ZIP code'}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6} offset={{ md: 6 }}>
                  <Button
                    type={'submit'}
                    isDisabled={!fk.isValid}
                    isFullWidth
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    mt={12}
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
  )
}

export default AddressSettings
