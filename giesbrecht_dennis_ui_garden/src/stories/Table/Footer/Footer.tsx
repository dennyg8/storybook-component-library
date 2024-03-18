import { FooterProps } from './Footer.types';
import styled from 'styled-components';
import Text from '../../Text/Text';

const StyledFooter = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
opacity: ${({ disabled }) => (disabled ? '0.5' : '1')}; 
cursor: ${({ disabled }) => (disabled && 'not-allowed')};

  tr {
    display: flex;
    border-bottom-left-radius: 8px; 
    border-bottom-right-radius: 8px; 
    overflow: hidden; 
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

const Footer = ({ content, disabled, backgroundColor }: FooterProps) => {
  return (
    <StyledFooter disabled={disabled} style={{ backgroundColor }}>
      <tr>
        {content.map((column, index) => (
          <th key={index}><Text label={column} disabled={disabled} /></th>
        ))}
      </tr>
    </StyledFooter>
  )
}

export default Footer;