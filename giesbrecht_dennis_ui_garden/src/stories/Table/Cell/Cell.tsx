import { CellProps } from './Cell.types';
import styled from 'styled-components';

const StyledCell = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  cursor: ${({ disabled }) => (disabled && 'not-allowed')};

    tr {
      display: flex;
      border: 0.15em solid black;
    }

    th {
      color: #000000;
      font-family: sans-serif;
      padding: 20px 15px;
      text-align: left;
      width: 200px;
    }
`;

const Cell = ({ content, disabled, backgroundColor }: CellProps) => {
  return (
    <StyledCell disabled={disabled} style={{ backgroundColor }}>
      <tr>
        {content.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </StyledCell>
  )
}

export default Cell;