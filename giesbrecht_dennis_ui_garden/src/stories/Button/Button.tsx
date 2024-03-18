import styled, {  } from 'styled-components'
import type { ButtonProps } from './Button.types'
import { Text } from '../Text';
import type { TextProps } from '../Text/Text.types';

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled && 'not-allowed') || 'pointer'};
  transition: background-color 0.3s; 
`

const Button = ({ label, disabled, backgroundColor, ...textProps }: ButtonProps & TextProps) => {
  return (
    <StyledButton disabled={disabled} style={{ backgroundColor }}>
      <Text label={label} disabled={disabled} {...textProps} />
    </StyledButton>
  );
};

export default Button;