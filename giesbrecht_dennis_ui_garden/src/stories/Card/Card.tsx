import styled, {  } from 'styled-components'
import type { CardProps } from './Card.types';
import { Image } from '../Image';
import { Text } from '../Text';

const CardContainer = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 350px;
  height: 500px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#D9D9D9'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  margin: 16px;
`;

const TextContainer = styled.div`
  margin: 16px;
`;

const Card = ({ title, text, src, disabled, backgroundColor }: CardProps) => {
  return (
    <CardContainer disabled={disabled} backgroundColor={backgroundColor}>
      <Image src={src} alt={title} disabled={disabled} />
      <TitleContainer>
        <Text label={title} disabled={disabled} fontSize="medium" fontStyle="subHeading" />
      </TitleContainer>
      <TextContainer>
        <Text label={text} disabled={disabled} fontSize="small" />
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
