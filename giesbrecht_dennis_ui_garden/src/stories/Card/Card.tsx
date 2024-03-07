import styled, {  } from 'styled-components'
import type { CardProps } from './Card.types';

const CardContainer = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 350px;
  height: 500px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#D9D9D9'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
`;

const CardText = styled.p`
  font-size: 16px;
  margin: 16px;
  line-height: 1.5;
`;

const Card = ({ title, text, src, disabled, backgroundColor }: CardProps) => {
  return (
    <CardContainer disabled={disabled} backgroundColor={backgroundColor}>
      <CardImage src={src} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;
