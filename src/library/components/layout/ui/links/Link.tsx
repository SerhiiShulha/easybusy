import styled from '@emotion/styled'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { colors } from '../../../../constants/styles'

const Container = styled.div<{
  disabled?: boolean
  color?: string
}>`
  background-color: ${(props) =>
    !props.disabled ? props.color || colors.primary : 'rgb(211,213,211)'};
  color: #fff;
  font-size: 1.4rem;
  border: 1px solid
    ${(props) =>
      !props.disabled ? props.color || colors.primary : 'rgb(211,213,211)'};
  border-radius: 0.6rem;
  font-weight: 600;

  a,
  span {
    display: block;
    padding: 1rem 4.4rem;
  }
`

interface Props {
  children: React.ReactNode
  primary?: boolean
  to: string
  disabled?: boolean
  className?: string
  color?: string
}

const Link: React.FC<Props> = ({
  to,
  color,
  disabled = false,
  className,
  children,
}) => {
  return (
    <Container color={color} disabled={disabled} className={className}>
      {!disabled ? (
        <RouterLink to={to}>{children}</RouterLink>
      ) : (
        <span className={'cursor-default'}>{children}</span>
      )}
    </Container>
  )
}

export default Link
