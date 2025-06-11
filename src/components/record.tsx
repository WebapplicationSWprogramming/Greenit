import styled from "styled-components";

interface RecordProps {
  userName: string;
  time: string;
  title: string;
  content: string;
  image?: string;
}

export const Record = ({
  userName,
  time,
  title,
  content,
  image,
}: RecordProps) => {
  return (
    <Container>
      <InfoContainer>
        <UserName>{userName}</UserName>
        <Time>{time}</Time>
      </InfoContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ContentContainer>
      {image && <img src={image} alt="인증샷" />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.color.white};
  gap: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  align-items: center;
`;

const UserName = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.greenScale300};
`;

const Time = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.grayScale300};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.font.medium16}
`;

const Content = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.grayScale500};
`;
