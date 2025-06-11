import styled from "styled-components";
import { Tree } from "../assets";

interface MissionCardProps {
  title: string;
  description: string;
  point: number;
  onClick?: () => void;
  category: string[];
}

export const MissionCard = ({
  title,
  description,
  point,
  onClick,
  category,
}: MissionCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <TitleContainer>
        <Toptitle>{title}</Toptitle>
        <Toptitle>{point}P</Toptitle>
      </TitleContainer>
      <img src={Tree} alt="icon" height={136} />
      <DescriptionContainer>
        <CategoryWarp>
          {category.map((cat, index) => (
            <Category key={index}>{cat}</Category>
          ))}
        </CategoryWarp>
        <Description>{description}</Description>
      </DescriptionContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 28px 20px 32px 20px;
  background-color: ${({ theme }) => theme.color.greenScale400};
  color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toptitle = styled.h2`
  ${({ theme }) => theme.font.semi24}
  color: ${({ theme }) => theme.color.white};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.white};
`;

const CategoryWarp = styled.div`
  display: flex;
  gap: 4px;
`;

const Category = styled.span`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.greenScale200};
  background-color: ${({ theme }) => theme.color.white};
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.greenScale200};
`;
