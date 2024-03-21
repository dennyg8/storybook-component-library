import { TableProps } from './Table.types';
import Header from './Header/Header';
import Row from './Row/Row';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const StyledTable = styled.table<{ disabled?: boolean; backgroundColor?: string }>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  cursor: ${({ disabled }) => (disabled && 'not-allowed')};
  border-spacing: 0;
`;

const Table = ({ disabled, backgroundColor, headerContent, rowData, footerContent }: TableProps) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <Header content={headerContent} disabled={disabled} />
      <tbody>
        {rowData.map((row, index) => (
          <Row key={index} content={row} disabled={disabled} />
        ))}
      </tbody>
      <Footer content={footerContent} disabled={disabled} />
    </StyledTable>
  );
};

export default Table;
