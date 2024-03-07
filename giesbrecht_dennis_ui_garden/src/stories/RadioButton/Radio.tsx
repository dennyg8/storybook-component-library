import styled from 'styled-components';
import type { RadioProps } from './Radio.types';

const RadioContainer = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

const RadioButton = styled.div<{ selected?: boolean; disabled?: boolean }>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 50%;
    display: ${({ selected }) => (selected ? 'block' : 'none')};
  }
`;

const RadioLabel = styled.label<{ disabled?: boolean; color?: string }>`
  color: ${({ color }) => color || 'black'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  margin-bottom: 20px;
`;

const Radio = ({ selectedOption, disabled, color }: RadioProps) => {
  return (
    <RadioContainer disabled={disabled}>
      <RadioButton selected={selectedOption === 'Light'} disabled={disabled} />
      <RadioLabel disabled={disabled} color={color}>Light</RadioLabel>
      <RadioButton selected={selectedOption === 'Dark'} disabled={disabled} />
      <RadioLabel disabled={disabled} color={color}>Dark</RadioLabel>
    </RadioContainer>
  );
};

export default Radio;
