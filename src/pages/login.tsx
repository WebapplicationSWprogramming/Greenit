import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { TopBar } from "../components/topbar";

export const Login = () => {
  return (
    <>
      <TopBar title="회원가입" />
      <SignupContainer>
        <Flex>
          <TopContainer>
            <Title>준비가 되셨나요?</Title>
            <Title>
              <Span>Greenit</Span>에서 바로 시작해요
            </Title>
            <SubTitle>오늘의 챌린지를 시작하려면 로그인하세요</SubTitle>
          </TopContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="아이디 입력"
              onChange={(e) => console.log(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호 입력"
              onChange={(e) => console.log(e.target.value)}
              password
            />
          </InputContainer>
        </Flex>
        <ButtonContainer>
          <Button onClick={() => {}}>로그인</Button>
          <LoginText>
            계정이 없으신가요? <a href="/">회원가입 하러가기</a>
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
