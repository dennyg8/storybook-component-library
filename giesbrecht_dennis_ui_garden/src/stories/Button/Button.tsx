import styled, {  } from 'styled-components'
import type { ButtonProps } from './Button.types'

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled && 'grey') || 'black'};
  font-size: medium;
  font-weight: 400;
  font-style: italic;
  color: #ffffff;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled && 'not-allowed') || 'pointer'};
  transition: background-color 0.3s; 
`

const Button = ({ label, disabled, backgroundColor }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} style={{ backgroundColor }}>
      {label}
    </StyledButton>
  )
}

export default Button;