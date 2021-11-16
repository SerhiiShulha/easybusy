import React from 'react'
import { useField } from 'formik'
import FormField from '../FormField'
import { Textarea } from '@chakra-ui/react'

const TextareaField = ({ label, mb, className, ...inputProps }) => {
  const [field, meta] = useField(inputProps.name)

  return (
    <FormField
      label={label}
      name={field.name}
      touched={meta.touched}
      mb={mb}
      error={meta.error}
      className={className}
    >
      <Textarea
        {...field}
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

export default TextareaField
