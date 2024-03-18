import { HeaderProps } from './Header.types';
import styled from 'styled-components';
import Text from '../../Text/Text';

const StyledHeader = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'grey'};
  cursor: ${({ disabled }) => (disabled && 'not-allowed')};

    tr {
      display: flex;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border: 0.15em solid black;
    }

    th {
      color: #ffffff;
      font-family: sans-serif;
      padding: 8px 15px;
      text-align: left;
      width: 200px;
    }

    th:first-child {
      border-right: 0.15em solid black;
    }
`;

const Header = ({ content, disabled, backgroundColor }: HeaderProps) => {
  return (
    <StyledHeader disabled={disabled} style={{ backgroundColor }}>
      <tr>
        {content.map((column, index) => (
          <th key={index}><Text label={column} disabled={disabled} fontStyle='subHeading'/></th>
        ))}
      </tr>
    </StyledHeader>
  )
}

export default Header;