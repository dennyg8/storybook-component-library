import styled from 'styled-components';
import { Card } from '../../Card';
import { Text } from '../../Text';
import image from '../../assets/terminal.png';

const DevSetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DevSetup = () => {
  return (
    <DevSetupContainer>
      <Text label="Dev Setup" fontSize="large" fontStyle="subHeading" />
      <CardsContainer>
        <Card title="Card 1" text="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam." src={image} />
        <Card title="Card 2" text="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam." src={image} />
        <Card title="Card 3" text="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam." src={image} />
      </CardsContainer>
    </DevSetupContainer>
  );
};

export default DevSetup;
