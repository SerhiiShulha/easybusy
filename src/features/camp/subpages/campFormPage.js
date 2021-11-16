import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import {
  SettingsSubtitle,
  Text,
} from '../../../library/components/typography/typography'
import { colors } from '../../../library/constants/styles'
import TextField from '../../../library/components/inputs/textField/TextField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Divider,
  Flex,
  HStack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import TextareaField from '../../../library/components/inputs/textField/TextareaField'
import SingleSelect from '../../../library/components/inputs/textField/Select'
import { provinces } from '../../../library/constants/locations/provinces'
import FileUpload from '../../../library/components/inputs/fileUpload/fileUpload'
import { format, isValid } from 'date-fns'
import DatePicker from '../../../library/components/inputs/datePicker/datePicker'

const scheduleTime = [
  { value: '00:00', label: '12:00 AM' },
  { value: '01:00', label: '01:00 AM' },
  { value: '02:00', label: '02:00 AM' },
  { value: '03:00', label: '03:00 AM' },
  { value: '04:00', label: '04:00 AM' },
  { value: '05:00', label: '05:00 AM' },
  { value: '06:00', label: '06:00 AM' },
  { value: '07:00', label: '07:00 AM' },
  { value: '08:00', label: '08:00 AM' },
  { value: '09:00', label: '09:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '17:00', label: '05:00 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '19:00', label: '07:00 PM' },
  { value: '20:00', label: '08:00 PM' },
  { value: '21:00', label: '09:00 PM' },
  { value: '22:00', label: '10:00 PM' },
  { value: '23:00', label: '11:00 PM' },
]

const validationSchema = Yup.object({
  name: Yup.string().max(200).required(),
  description: Yup.string().max(5000),
  website: Yup.string().max(500),
  youtubeLink: Yup.string().max(500),
  phone1: Yup.string().max(50),
  phone2: Yup.string().max(50),
  address: Yup.object({
    addressLine1: Yup.string().max(100),
    addressLine2: Yup.string().max(100),
    pincode: Yup.string().max(100),
    latitude: Yup.number(),
    longitude: Yup.number(),
  }),
  anytimeCancellationAllowed: Yup.boolean(),
  cancellationWindowInHours: Yup.number(),
  online: Yup.boolean(),
  currency: Yup.string(),
  minAgeLimit: Yup.number(),
  maxAgeLimit: Yup.number(),
  price: Yup.number(),
  capacity: Yup.number(),
})

const CampFormPage = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    website: '',
    youtubeLink: '',
    phone1: '',
    phone2: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      pincode: '',
      latitude: null,
      longitude: null,
    },
    anytimeCancellationAllowed: false,
    cancellationWindowInHours: null,
    online: false,
    currency: '',
    minAgeLimit: 0,
    maxAgeLimit: 18,
    price: null,
    capacity: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const startPickerState = useDisclosure()
  const [startDate, setStartDate] = useState(null)
  const endPickerState = useDisclosure()
  const [endDate, setEndDate] = useState(new Date(''))

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

  const handleDatesChange = (dates) => {
    setStartDate(dates.startDate)
    setEndDate(dates.endDate)
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Container className={'pt-24 mb-60'}>
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Text
            as={'h1'}
            size={'4rem'}
            lineHeight={1}
            align={'center'}
            mb={'4rem'}
            weight={800}
          >
            Create New Camp
          </Text>
          <Text color={colors.text80} align={'center'} mb={'6rem'}>
            Please fill all the info to post new camp
          </Text>

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
                  <Row className={'mb-12'}>
                    <Col md={12}>
                      <TextField
                        label={'Camp Name'}
                        name={'name'}
                        placeholder={'Enter camp name'}
                      />
                    </Col>
                    <Col md={12}>
                      <TextareaField
                        label={'Description'}
                        name={'description'}
                        placeholder="Text..."
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        label={'Website'}
                        name={'website'}
                        placeholder={'https://'}
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        label={'YouTube video'}
                        name={'youtubeLink'}
                        placeholder={'https://'}
                      />
                    </Col>
                  </Row>

                  <Row className={'mb-12'}>
                    <Col md={12}>
                      <SettingsSubtitle>Contact Information</SettingsSubtitle>
                    </Col>
                    <Col md={6}>
                      <TextField
                        label={'Phone'}
                        name={'phone1'}
                        placeholder={'Type the phone number'}
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        label={'Phone 2 (optional)'}
                        name={'phone2'}
                        placeholder={'Type the phone number'}
                      />
                    </Col>
                    <Col md={6}>
                      <SingleSelect
                        label={'City'}
                        name={'address.city'}
                        placeholder={'Select your city'}
                        options={cities}
                        isDisabled={!chosenState.current}
                      />
                    </Col>
                    <Col md={6}>
                      <SingleSelect
                        label={'Province'}
                        name={'address.state'}
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
                        label={'Address Line 1'}
                        name={'address.addressLine1'}
                        placeholder={'Type your address'}
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        label={'Address Line 2'}
                        name={'address.addressLine2'}
                        placeholder={'Type your address'}
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        label={'Pincode'}
                        name={'address.pincode'}
                        placeholder={'Enter pincode'}
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        label={'Longitude'}
                        name={'address.longitude'}
                        placeholder={'Type the longitude'}
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        label={'Latitude'}
                        name={'address.latitude'}
                        placeholder={'Type the latitude'}
                      />
                    </Col>
                  </Row>

                  <Row className={'mb-12'}>
                    <Col md={12}>
                      <SettingsSubtitle>Camp Details</SettingsSubtitle>
                    </Col>
                    <Col md={6}>
                      <HStack spacing={{ base: 4, md: 6 }}>
                        <Flex flex={1}>
                          <div onClick={startPickerState.onOpen}>
                            <TextField
                              label={'Start Date'}
                              name={'startDate'}
                              placeholder={'Select date'}
                              isReadOnly
                              value={
                                startDate
                                  ? isValid(startDate)
                                    ? format(startDate, 'd MMM, yyyy')
                                    : ''
                                  : ''
                              }
                            />
                          </div>
                        </Flex>
                        <Flex flex={1}>
                          <SingleSelect
                            label={'Start Time'}
                            name={'startTime'}
                            placeholder={'Select time'}
                            options={scheduleTime}
                          />
                        </Flex>
                      </HStack>
                    </Col>
                    <Col md={6}>
                      <HStack spacing={{ base: 4, md: 6 }}>
                        <Flex flex={1}>
                          <TextField
                            label={'End Date'}
                            name={'endDate'}
                            placeholder={'Select date'}
                            onClick={endPickerState.onOpen}
                            isReadOnly
                            value={
                              endDate
                                ? isValid(endDate)
                                  ? format(endDate, 'd MMM, yyyy')
                                  : ''
                                : ''
                            }
                          />
                        </Flex>
                        <Flex flex={1}>
                          <SingleSelect
                            label={'End Time'}
                            name={'endTime'}
                            placeholder={'Select time'}
                            options={scheduleTime}
                          />
                        </Flex>
                      </HStack>
                    </Col>
                    <Col md={6}>
                      <SingleSelect
                        label={'Anytime Cancellation Allowed'}
                        name={'anytimeCancellationAllowed'}
                        placeholder={'Select'}
                        options={[
                          { label: 'YES', value: 'true' },
                          { label: 'NO', value: 'false' },
                        ]}
                      />
                    </Col>
                    <Col md={6}>
                      <SingleSelect
                        label={'Cancellation Window'}
                        name={'cancellationWindowInHours'}
                        placeholder={'Select cancellation window'}
                        options={[
                          { label: '12 Hours', value: 12 },
                          { label: '24 Hours', value: 24 },
                          { label: '48 Hours', value: 48 },
                          { label: '72 Hours', value: 72 },
                          { label: '96 Hours', value: 96 },
                        ]}
                      />
                    </Col>
                  </Row>

                  <Divider className={'mt-14 mb-14'} />

                  <Row className={'mb-32'}>
                    <Col md={12}>
                      <FileUpload />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4} offset={{ md: 8 }}>
                      <Button
                        type={'submit'}
                        disabled={!fk.isValid}
                        isFullWidth
                        isLoading={isSubmitting}
                        loadingText="Submitting"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )
            }}
          </Formik>
          {/*<Row className={'mt-32'}>*/}
          {/*  <Col md={12}>*/}
          {/*    <FileUpload />*/}
          {/*  </Col>*/}
          {/*</Row>*/}
        </Col>
      </Row>
      {startPickerState.isOpen && (
        <DatePicker
          isOpen={startPickerState.isOpen}
          onClose={startPickerState.onClose}
          startDate={startDate}
          endDate={endDate}
          type={'start'}
          onSubmit={handleDatesChange}
        />
      )}
      {endPickerState.isOpen && (
        <DatePicker
          isOpen={endPickerState.isOpen}
          onClose={endPickerState.onClose}
          startDate={startDate}
          endDate={endDate}
          type={'end'}
          onSubmit={handleDatesChange}
        />
      )}
    </Container>
  )
}

export default CampFormPage
