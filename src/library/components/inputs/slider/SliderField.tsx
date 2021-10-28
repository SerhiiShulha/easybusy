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

interface Props extends InputHTMLAttributes<Props> {
  name: string
  minName: string
  maxName: string
  defaultRange: [number, number]
  values: [number, number]
  handleChange: (arg1: [number, number]) => void
  label: string
  mb?: string
  inputWidth?: string
}

const SliderField: React.FC<Props> = (props) => {
  const [field, meta, helpers] = useField(props.name)
  const [values, setValues] = useState<[number, number]>(props.values)

  const onChange = (vals: [number, number]) => {
    setValues(vals)
  }
  const setMin = (val: string) => {
    setValues((prevState) => [parseInt(val, 10), prevState[1]])
  }
  const setMax = (val: string) => {
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
        mb={'6'}
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
        >
          <NumberInputField />
        </NumberInput>
        <span className={'ml-4 mr-4'}>-</span>
        <NumberInput
          value={values[1]}
          max={props.defaultRange[1]}
          onChange={setMax}
        >
          <NumberInputField />
        </NumberInput>
      </Flex>
    </FormField>
  )
}

export default SliderField
