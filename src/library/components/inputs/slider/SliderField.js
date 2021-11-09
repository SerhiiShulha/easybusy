import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import { useField } from 'formik'
import FormField from '../FormField'
import { FaGripLinesVertical } from 'react-icons/fa'
import { Visible } from 'react-grid-system'

const SliderField = (props) => {
  const [field, meta, helpers] = useField(props.name)
  const [values, setValues] = useState(props.values)

  const onChange = (vals) => {
    setValues(vals)
  }
  const setMin = (val) => {
    setValues((prevState) => [parseInt(val, 10), prevState[1]])
  }
  const setMax = (val) => {
    setValues((prevState) => [prevState[0], parseInt(val, 10)])
  }

  return (
    <FormField
      label={props.label}
      name={field.name}
      touched={meta.touched}
      mb={props.mb}
      error={meta.error}
      inputWidth={props.inputWidth}
      className={props.className}
    >
      <RangeSlider
        aria-label={['min', 'max']}
        value={values}
        min={props.defaultRange[0]}
        max={props.defaultRange[1]}
        onChange={onChange}
        onChangeEnd={props.handleChange}
        mb={6}
        mt={{ base: 8 }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <Box as={FaGripLinesVertical} fontSize={10} color={'#e0e0e0'} />
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          <Box as={FaGripLinesVertical} fontSize={10} color={'#e0e0e0'} />
        </RangeSliderThumb>
      </RangeSlider>
      <Flex flex={1} justifyContent={'space-between'} alignItems={'center'}>
        <NumberInput
          value={values[0]}
          min={props.defaultRange[0]}
          onChange={setMin}
          className={'flex-1 mr-4 md:mr-0'}
        >
          <NumberInputField />
        </NumberInput>
        <Visible md lg xl>
          <span className={'ml-4 mr-4'}>-</span>
        </Visible>
        <NumberInput
          value={values[1]}
          max={props.defaultRange[1]}
          onChange={setMax}
          className={'flex-1'}
        >
          <NumberInputField />
        </NumberInput>
      </Flex>
    </FormField>
  )
}

export default SliderField
