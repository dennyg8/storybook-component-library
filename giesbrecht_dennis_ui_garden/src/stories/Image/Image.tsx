import styled, {  } from 'styled-components'
import type { ImageProps } from './Image.types';

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
`;

const StyledImage = styled.img<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  max-width: 100%; 
  transition: opacity 0.3s ease;
`;

const Image = ({ src, alt, disabled }: ImageProps) => {
  return (
    <StyledImageContainer>
      <StyledImage src={src} alt={alt} disabled={disabled} />
    </StyledImageContainer>
  );
};

export default Image;
