import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { Input } from '@chakra-ui/react'
import FormField from '../FormField'

interface Props extends InputHTMLAttributes<Props> {
  label: string
  inputWidth?: string
  mb?: string
  name: string
}

const TextField: React.FC<Props> = ({
  label,
  inputWidth,
  mb,
  className,
  ...inputProps
}) => {
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
        type={inputProps.type || 'text'}
        isInvalid={Boolean(meta.error) && meta.touched}
        isDisabled={inputProps.disabled || false}
        id={inputProps.name}
        placeholder={inputProps.placeholder}
        {...field}
      />
    </FormField>
  )
}

export default TextField
