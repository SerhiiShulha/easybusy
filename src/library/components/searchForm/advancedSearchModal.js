import {
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import * as Yup from 'yup'
import TextField from '../inputs/textField/TextField'
import SliderField from '../inputs/slider/SliderField'
import SingleSelect from '../inputs/textField/Select'
import WeekDayPicker from './weekDayPicker'
import DatePicker from '../inputs/datePicker/datePicker'
import { format, isValid } from 'date-fns'

const validationSchema = Yup.object({
  name: Yup.string(),
  minCapacity: Yup.number().min(1),
  maxCapacity: Yup.number().max(20),
  minAge: Yup.number().min(3),
  maxAge: Yup.number().max(18),
  minPrice: Yup.number().min(0),
  maxPrice: Yup.number().max(3000),
  minRadius: Yup.number().min(0),
  maxRadius: Yup.number().max(1000),
  startTime: Yup.object({
    value: Yup.string(),
    label: Yup.string(),
  }),
  endTime: Yup.object({
    value: Yup.string(),
    label: Yup.string(),
  }),
})

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
]

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

const AdvancedSearchModal = ({ isOpen, onClose }) => {
  const startPickerState = useDisclosure()
  const [startDate, setStartDate] = useState(null)
  const endPickerState = useDisclosure()
  const [endDate, setEndDate] = useState(new Date(''))

  const [selectedDays, setSelectedDays] = useState([
    'Monday',
    'Wednesday',
    'Thursday',
  ])

  const initialValues = {
    name: '',
    minCapacity: 1,
    maxCapacity: 20,
    minAge: 5,
    maxAge: 13,
    minPrice: 700,
    maxPrice: 1900,
    minRadius: 0,
    maxRadius: 100,
    startTime: { value: '12:00', label: '12:00 PM' },
    endTime: { value: '12:00', label: '12:00 PM' },
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  const handleDatesChange = (dates) => {
    setStartDate(dates.startDate)
    setEndDate(dates.endDate)
  }

  console.log({ startDate, endDate })

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h3>Advanced Search</h3>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(fk) => {
            console.log(fk)
            return (
              <Form>
                <ModalBody px={{ base: 0, md: 6 }}>
                  <Container>
                    <Row>
                      <Col lg={8} offset={{ lg: 2 }}>
                        <Row>
                          <Col lg={12} className={'mb-16'}>
                            <TextField
                              label={'Camp Name'}
                              name={'name'}
                              placeholder={'Type camp name'}
                            />
                          </Col>
                          <Col md={6} className={'mb-6 md:mb-16'}>
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
                          <Col md={6} className={'mb-6 md:mb-16'}>
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
                          <Col md={12} className={'mb-16'}>
                            <WeekDayPicker
                              values={selectedDays}
                              onChange={setSelectedDays}
                            />
                          </Col>
                          <Col md={6} className={'mb-16'}>
                            <SliderField
                              name={'capacity'}
                              label={'Capacity'}
                              minName={'minCapacity'}
                              maxName={'maxCapacity'}
                              defaultRange={[1, 20]}
                              values={[
                                fk.values.minCapacity,
                                fk.values.maxCapacity,
                              ]}
                              handleChange={(values) => {
                                console.log('UPDATE:', values)
                                fk.setFieldValue('minCapacity', values[0])
                                fk.setFieldValue('maxCapacity', values[1])
                              }}
                            />
                          </Col>
                          <Col md={6} className={'mb-16'}>
                            <SliderField
                              name={'age'}
                              label={'Age limit'}
                              minName={'minAge'}
                              maxName={'maxAge'}
                              defaultRange={[3, 18]}
                              values={[fk.values.minAge, fk.values.maxAge]}
                              handleChange={(values) => {
                                console.log('UPDATE:', values)
                                fk.setFieldValue('minAge', values[0])
                                fk.setFieldValue('maxAge', values[1])
                              }}
                            />
                          </Col>
                          <Col md={6} className={'mb-16'}>
                            <SliderField
                              name={'price'}
                              label={'Price'}
                              minName={'minPrice'}
                              maxName={'maxPrice'}
                              defaultRange={[0, 3000]}
                              values={[fk.values.minPrice, fk.values.maxPrice]}
                              handleChange={(values) => {
                                console.log('UPDATE:', values)
                                fk.setFieldValue('minPrice', values[0])
                                fk.setFieldValue('maxPrice', values[1])
                              }}
                            />
                          </Col>
                          <Col md={6} className={'mb-16'}>
                            <SliderField
                              name={'radius'}
                              label={'Location Radius'}
                              minName={'minRadius'}
                              maxName={'maxRadius'}
                              defaultRange={[0, 1000]}
                              values={[
                                fk.values.minRadius,
                                fk.values.maxRadius,
                              ]}
                              handleChange={(values) => {
                                console.log('UPDATE:', values)
                                fk.setFieldValue('minRadius', values[0])
                                fk.setFieldValue('maxRadius', values[1])
                              }}
                            />
                          </Col>
                          <Col md={12} className={'mb-10'}>
                            <Row>
                              <Col md={4}>
                                <SingleSelect
                                  label={'Gender'}
                                  name={'gender'}
                                  placeholder={'Select gender'}
                                  options={genders}
                                />
                              </Col>
                              <Col md={4}>
                                <SingleSelect
                                  label={'Online'}
                                  name={'online'}
                                  placeholder={'Select status'}
                                  options={[
                                    { value: 'true', label: 'Yes' },
                                    { value: 'false', label: 'No' },
                                  ]}
                                />
                              </Col>
                              <Col md={4}>
                                <SingleSelect
                                  label={'In Person'}
                                  name={'inPerson'}
                                  placeholder={'In person?'}
                                  options={[
                                    { value: 'true', label: 'Yes' },
                                    { value: 'false', label: 'No' },
                                  ]}
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col md={12} className={'md:mb-10'}>
                            <SingleSelect
                              isMulti
                              label={'Keywords'}
                              name={'keywords'}
                              placeholder={'Select keywords'}
                              options={[
                                { value: 'true', label: 'Yes' },
                                { value: 'false', label: 'No' },
                                { value: 'qwe', label: 'Qwe' },
                                { value: 'asd', label: 'Asd' },
                                { value: 'zxc', label: 'Zxc' },
                                { value: 'zxc', label: 'Zxc' },
                                { value: 'xcvbxb', label: 'oouio' },
                                { value: 'fgjkfg', label: 'rty' },
                                { value: 'tyity', label: 'ghjk' },
                                { value: 'rtuyi', label: 'tyui' },
                              ]}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </ModalBody>

                <ModalFooter p={{ base: '4rem 0', md: '4rem 3rem 6rem' }}>
                  <Container>
                    <Row>
                      <Col lg={8} offset={{ lg: 2 }}>
                        <Flex
                          flex={1}
                          justify={{ base: 'center', md: 'flex-end' }}
                        >
                          <Button mr={3} size={'m'} variant="action">
                            Reset filters
                          </Button>
                          <Button size={'m'} type={'submit'}>
                            Apply Filters
                          </Button>
                        </Flex>
                      </Col>
                    </Row>
                  </Container>
                </ModalFooter>
              </Form>
            )
          }}
        </Formik>
      </ModalContent>
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
    </Modal>
  )
}

export default AdvancedSearchModal
