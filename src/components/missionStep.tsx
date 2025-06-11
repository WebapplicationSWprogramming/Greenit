import styled from "styled-components";

interface MissionStep {
  title: string;
  number: number;
  desctiption: string;
}

export const MissionStep = ({ title, number, desctiption }: MissionStep) => {
  return (
    <StepContainer>
      <NumberText>{number}</NumberText>
      <InfoContainer>
        <Title>{title}</Title>
        <Desctiption>{desctiption}</Desctiption>
      </InfoContainer>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
`;

const NumberText = styled.p`
  ${({ theme }) => theme.font.semi16}
  color: ${({ theme }) => theme.color.greenScale500};
`;

const Title = styled.p`
  ${({ theme }) => theme.font.semi16}
  color: ${({ theme }) => theme.color.black};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Desctiption = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.grayScale300};
`;
