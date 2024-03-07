import styled, {  } from 'styled-components'
import type { LabelProps } from './Label.types'

/**
 * Primary UI component for user interaction
 */
const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled && 'grey')};
  cursor: ${({ disabled }) => (disabled && 'not-allowed')};
  font-size: medium;
`

const Label = ({ label, disabled, color }: LabelProps) => {
  return (
    <StyledLabel disabled={disabled} style={{ color }}>
      {label}
    </StyledLabel>
  )
}

export default Label;