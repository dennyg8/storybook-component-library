import { RowProps } from './Row.types';
import styled from 'styled-components';
import Cell from '../Cell/Cell';

const StyledRow = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')}; 
  cursor: ${({ disabled }) => (disabled && 'not-allowed')};

  tr {
    display: flex;
  }
`;

const Row = ({ content, disabled, backgroundColor }: RowProps) => {
  return (
    <StyledRow disabled={disabled} style={{ backgroundColor }}>
      <tr>
        {content.map((column, index) => (
          <Cell key={index} content={[column]} disabled={disabled} backgroundColor={backgroundColor} />
        ))}
      </tr>
    </StyledRow>
  )
}

export default Row;