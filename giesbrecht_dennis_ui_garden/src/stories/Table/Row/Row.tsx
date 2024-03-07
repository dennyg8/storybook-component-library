import { RowProps } from './Row.types';
import styled from 'styled-components';

const StyledRow = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
opacity: ${({ disabled }) => (disabled ? '0.5' : '1')}; 
cursor: ${({ disabled }) => (disabled && 'not-allowed')};

  tr {
    display: flex;
    border: .15em solid black;
  }

  th {
    color: #000000;
    font-family: sans-serif;
    padding: 8px 15px;
    text-align: left;
    width: 200px;
  }

  th:first-child {
    border-right: .15em solid black; 
  }
`;

const Row = ({ content, disabled, backgroundColor }: RowProps) => {
  return (
    <StyledRow disabled={disabled} style={{ backgroundColor }}>
      <tr>
        {content.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </StyledRow>
  )
}

export default Row;