import styled from '@emotion/styled'
import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { Input } from '@chakra-ui/react'
import { theme } from '../../../styles/chakraConfig'

const Container = styled.div<{ width?: string; mb?: string }>`
  width: ${(props) => props.width || '100%'};
  margin-bottom: ${(props) => props.mb || '2rem'};
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1.4rem;
  font-weight: 600;
`

const ErrorMessage = styled.span`
  color: ${theme.colors.red[500]};
  font-size: 13px;
  margin-left: calc(
    ${theme.components.Input.sizes.xxl.field.p} +
      ${theme.components.Input.sizes.xxl.field.borderWidth}
  );
`

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
  const [field, meta, helpers] = useField(inputProps.name)

  return (
    <Container width={inputWidth} mb={mb} className={className}>
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        type={inputProps.type || 'text'}
        isInvalid={Boolean(meta.error) && meta.touched}
        isDisabled={inputProps.disabled || false}
        id={inputProps.name}
        placeholder={inputProps.placeholder}
        {...field}
      />
      {Boolean(meta.error) && meta.touched && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </Container>
  )
}

export default TextField
