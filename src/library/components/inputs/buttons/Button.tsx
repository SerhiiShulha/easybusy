import styled from '@emotion/styled'
import React from 'react'

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 1rem 4.4rem;
  background-color: ${(props) =>
    props.primary ? 'rgba(12, 206, 107, 1)' : 'transparent'};
  color: #fff;
  font-size: 1.4rem;
  border: 1px solid
    ${(props) => (props.primary ? 'rgba(12, 206, 107, 1)' : '#fff')};
  border-radius: 0.6rem;
  font-weight: 600;
`

interface Props {
  children: React.ReactNode
  primary?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({
  type = 'button',
  primary = true,
  onClick,
  disabled = false,
  className,
  children,
}) => {
  return (
    <StyledButton
      type={type}
      primary={primary}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

export default Button
