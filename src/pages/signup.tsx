import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { TopBar } from "../components/topbar";

export const Signup = () => {
  const [step, setStep] = useState(0);
  const steps = ["아이디", "비밀번호"];
  return (
    <>
      <TopBar title="회원가입" />
      <SignupContainer>
        <Flex>
          <TopContainer>
            <Title>지금, 시작해볼까요? </Title>
            <Title>
              사용할 <Span>{steps[step]}</Span>를 입력해주세요
            </Title>
            <SubTitle>아직 계정이 없다면 회원가입 하세요</SubTitle>
          </TopContainer>
          <InputContainer>
            {step === 0 ? (
              <Input
                type="text"
                placeholder="아이디 입력"
                onChange={(e) => console.log(e.target.value)}
              />
            ) : (
              <>
                <Input
                  type="password"
                  placeholder="비밀번호 입력"
                  onChange={(e) => console.log(e.target.value)}
                  password
                />
                <Input
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={(e) => console.log(e.target.value)}
                  password
                />
              </>
            )}
          </InputContainer>
        </Flex>
        <ButtonContainer>
          <Button
            onClick={() => {
              console.log(step);
              if (step < 1) {
                setStep(step + 1);
              } else {
                console.log("회원가입 완료");
              }
            }}
          >
            {step === 1 ? "시작하기" : "다음"}
          </Button>
          <LoginText>
            계정이 있으신가요? <a href="/">로그인 하러가기</a>
          </LoginText>
        </ButtonContainer>
      </SignupContainer>
    </>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  background-color: ${({ theme }) => theme.color.white};
  gap: 24px;
  padding: 0px 24px;
  ${({ theme }) => theme.font.semi24}
  margin-top: 56px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.color.greenScale500};
  margin-top: 16px;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.grayScale300};
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 0px 32px 0px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.font.semi24}
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0px;
`;

const LoginText = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.grayScale300};
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
