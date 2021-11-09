import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../constants/styles'

export const Container = styled.div`
  width: ${(props) => props.width || '100%'};
  margin-bottom: ${(props) => props.mb || '2.5rem'};
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
`

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 0.5rem;
  color: ${colors.error};
  font-size: 1.4rem;
`

const FormField = ({
  label,
  name,
  inputWidth,
  mb,
  error,
  touched,
  className,
  children,
}) => {
  return (
    <Container width={inputWidth} mb={mb} className={className}>
      <Label htmlFor={name}>{label}</Label>
      {children}
      {Boolean(error) && touched && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default FormField
