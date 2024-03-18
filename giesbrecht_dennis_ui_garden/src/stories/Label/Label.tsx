import styled, {  } from 'styled-components'
import type { LabelProps } from './Label.types'
import { Text } from '../Text';
import type { TextProps } from '../Text/Text.types';

/**
 * Primary UI component for user interaction
 */
const StyledLabel = styled.label<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled && 'not-allowed')};
`

const Label = ({ label, disabled, color, ...textProps }: LabelProps & TextProps) => {
  return (
    <StyledLabel disabled={disabled} style={{ color }}>
      <Text label={label} disabled={disabled} {...textProps} />
    </StyledLabel>
  )
}

export default Label;