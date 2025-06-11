import styled from "styled-components";
import { BottomBar } from "../components/bottombar";
import { Header } from "../components/header";
import { MissionCard } from "../components/missionCard";
import { TimeBar } from "../components/timebar";

export const Main = () => {
  const missions = [
    {
      title: "플라스틱 줄이기",
      description: "오늘 하루 플라스틱 사용을 줄여보세요.",
      point: 10,
      category: ["환경", "일상"],
    },
    {
      title: "대중교통 이용하기",
      description: "차 대신 대중교통을 이용해보세요.",
      point: 15,
      category: ["환경", "교통"],
    },
    {
      title: "재활용 실천하기",
      description: "오늘 재활용 가능한 물건을 분리배출하세요.",
      point: 20,
      category: ["환경", "재활용"],
    },
    {
      title: "친환경 제품 사용하기",
      description: "오늘 하루 친환경 제품을 사용해보세요.",
      point: 25,
      category: ["환경", "소비"],
    },
    {
      title: "에너지 절약하기",
      description: "전기, 물 사용을 줄여보세요.",
      point: 30,
      category: ["환경", "절약"],
    },
  ];
  return (
    <div>
      <Header />
      <Container>
        <TitleContainer>
          <Title>초록 점수를 올릴 시간</Title>
          <Title>오늘의 미션, 도전해보세요!!</Title>
          <SubTitle>오늘의 미션으로 마음도 환경도 맑게</SubTitle>
        </TitleContainer>
        <MissionContainer>
          <MissionCard
            title={missions[0].title}
            description={missions[0].description}
            point={missions[0].point}
            category={missions[0].category}
          />
          <TimeBar endTime="2025-06-11T11:41:00+09:00" />
        </MissionContainer>
      </Container>
      <BottomBar />
    </div>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grayScale100};
  height: calc(100vh - 56px);
  margin-top: 56px;
`;

const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.font.semi24}
  color: ${({ theme }) => theme.color.black};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.grayScale300};
  margin-top: -4px;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 58px 32px 58px;
`;
