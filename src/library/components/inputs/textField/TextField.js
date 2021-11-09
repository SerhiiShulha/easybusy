import React from 'react'
import { useField } from 'formik'
import { Input } from '@chakra-ui/react'
import FormField from '../FormField'

const TextField = ({ label, inputWidth, mb, className, ...inputProps }) => {
  const [field, meta] = useField(inputProps.name)

  return (
    <FormField
      label={label}
      name={field.name}
      touched={meta.touched}
      mb={mb}
      error={meta.error}
      inputWidth={inputWidth}
      className={className}
    >
      <Input
        {...field}
        type={inputProps.type || 'text'}
        isInvalid={Boolean(meta.error) && meta.touched}
        isDisabled={inputProps.disabled || false}
        id={inputProps.name}
        placeholder={inputProps.placeholder}
        isReadOnly={inputProps.isReadOnly || false}
        value={inputProps.value || field.value}
      />
    </FormField>
  )
}

export default TextField
