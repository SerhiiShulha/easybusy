import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface FormValues {
  name: string
  minCapacity: number
  maxCapacity: number
  minAge: number
  maxAge: number
  minPrice: number
  maxPrice: number
  minRadius: number
  maxRadius: number
}

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
})

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
]

const AdvancedSearchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const startPickerState = useDisclosure()
  const endPickerState = useDisclosure()

  const [selectedDays, setSelectedDays] = useState([
    'Monday',
    'Wednesday',
    'Thursday',
  ])

  const initialValues: FormValues = {
    name: '',
    minCapacity: 1,
    maxCapacity: 20,
    minAge: 5,
    maxAge: 13,
    minPrice: 700,
    maxPrice: 1900,
    minRadius: 0,
    maxRadius: 100,
  }

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

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
          {(fk) => (
            <Form>
              <ModalBody>
                <Container>
                  <Row>
                    <Col md={8} offset={{ md: 2 }}>
                      <Row>
                        <Col md={12} className={'mb-16'}>
                          <TextField
                            label={'Camp Name'}
                            name={'name'}
                            placeholder={'Type camp name'}
                          />
                        </Col>
                        <Col md={12} className={'mb-16'}>
                          <DatePicker
                            isOpen={startPickerState.isOpen}
                            // isOpen={true}
                            onClose={startPickerState.onClose}
                          />
                        </Col>
                        <Col md={6} className={'mb-16'}>
                          end date time
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
                            handleChange={(values: [number, number]) => {
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
                            handleChange={(values: [number, number]) => {
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
                            handleChange={(values: [number, number]) => {
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
                            values={[fk.values.minRadius, fk.values.maxRadius]}
                            handleChange={(values: [number, number]) => {
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
                        <Col md={12} className={'mb-10'}>
                          <SingleSelect
                            isMulti
                            label={'In Person'}
                            name={'inPerson'}
                            placeholder={'In person?'}
                            options={[
                              { value: 'true', label: 'Yes' },
                              { value: 'false', label: 'No' },
                              { value: 'qwe', label: 'Qwe' },
                              { value: 'asd', label: 'Asd' },
                              { value: 'zxc', label: 'Zxc' },
                            ]}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </ModalBody>

              <ModalFooter>
                <Container>
                  <Row>
                    <Col md={8} offset={{ md: 2 }}>
                      <Flex flex={1} justifyContent={'flex-end'}>
                        <Button mr={3} variant="outline">
                          Reset filters
                        </Button>
                        <Button type={'submit'}>Apply Filters</Button>
                      </Flex>
                    </Col>
                  </Row>
                </Container>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  )
}

export default AdvancedSearchModal
