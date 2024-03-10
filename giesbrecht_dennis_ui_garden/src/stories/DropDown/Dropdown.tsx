import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const DropdownContainer = styled.div<{ isOpen: boolean; disabled: boolean; backgroundColor?: string }>`
  width: 200px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'B6B6B6'};
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const DropdownHeader = styled.div<{ isOpen: boolean }>`
  padding: 15px;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background: black;
    position: absolute;
    right: 10px;
    top: 50%;
  }
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;

const DropdownListItem = styled.li<{ isHovered: boolean; disabled?: boolean }>`
  padding: 10px;
  background-color: ${({ isHovered }) => (isHovered ? '#eee' : 'transparent')};
  &:hover {
    background-color: ${({ disabled }) => disabled ? 'transparent' : '#eee'};
  }
`;

const Dropdown = ({ isOpen, disabled, backgroundColor, items, hoveredItem,  }: DropdownProps) => {
  return (
    <DropdownContainer isOpen={isOpen} disabled={disabled} backgroundColor={backgroundColor}>
      <DropdownHeader isOpen={isOpen} />
      <DropdownList isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownListItem
            key={index}
            isHovered={hoveredItem === item}
            disabled={disabled}
          >
            {item}
          </DropdownListItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
