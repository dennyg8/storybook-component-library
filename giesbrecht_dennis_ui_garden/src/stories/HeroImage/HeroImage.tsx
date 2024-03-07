import styled, {  } from 'styled-components'
import type { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.img<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  max-width: 100%; 
  transition: opacity 0.3s ease;
`;

const HeroImage = ({ src, alt, disabled }: HeroImageProps) => {
  return (
    <StyledHeroImage src={src} alt={alt} disabled={disabled} />
  );
};

export default HeroImage;
