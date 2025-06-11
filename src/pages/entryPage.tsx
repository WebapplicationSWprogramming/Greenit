import styled from "styled-components";
import { BackgroundImg } from "../assets";
import { Button } from "../components/button";

export const EntryPage = () => {
  return (
    <div>
      <TopContainer>
        <Title>오늘부터 시작하는 </Title>
        <Highlight>그린라이프</Highlight>
        <SubTitle>지금, 시작해볼까요?</SubTitle>
      </TopContainer>
      <BackgroundImgStyle src={BackgroundImg} alt="배경화면" />
      <ButtonContainer>
        <Button onClick={() => {}} border>
          회원가입
        </Button>
        <Button onClick={() => {}}>로그인</Button>
      </ButtonContainer>
    </div>
  );
};

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  gap: 24px;
  padding: 0px 24px;
  height: 300px;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.bold24}
  color: ${({ theme }) => theme.color.black};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color.greenScale300};
  ${({ theme }) => theme.font.bold24}
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.bold28}
  color: ${({ theme }) => theme.color.black};
`;

const BackgroundImgStyle = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;
`;
