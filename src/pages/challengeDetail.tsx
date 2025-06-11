import styled from "styled-components";
import { ChallengeImg, Check, Rectangle } from "../assets";
import { TopBar } from "../components/topbar";
import { Toggle } from "../components/switchTab";
import { useState } from "react";
import { MissionStep } from "../components/missionStep";
import { Record } from "../components/record";

export const ChallengeDetail = () => {
  const [currentMenu, setCurrentMenu] = useState<"info" | "reco">("info");

  const missionStepList = [
    {
      title: "챙겨야 될 준비물은 이런게 있어요",
      des: "쓰레기봉투, 위생장갑, 집게를 챙겨요.",
    },
    {
      title: "계획을 세워보아요",
      des: "플로깅 루트를 설정해요. 동네 하천, 집 근처 공원, 동네 골목 어디로 가볼까요?",
    },
    {
      title: "그럼 시작해볼까요?",
      des: "운동복을 입고 외출해요. 조깅 중 주변에 버려진 쓰레기를 보면 주워요!!",
    },
  ];

  const recordList = [
    {
      name: "유저",
      time: "1시간전",
      title: "플로깅 미션 처음 해봤다!!",
      content:
        "처음 해보는 미션이었는데 성취감도 있고 좋았다. 다음에 산책하면서 또 플로깅 미션을 할거다",
    },
    {
      name: "유저",
      time: "하루전",
      title: "플로깅 미션 인증",
      content:
        "처음 해보는 미션이었는데 성취감도 있고 좋았다. 다음에 산책하면서 또 플로깅 미션을 할거다",
      img: Rectangle,
    },
  ];

  return (
    <div>
      <TopBar title="챌린지" />
      <div>
        <img src={ChallengeImg} alt="챌린지 이미지" style={{ width: "100%" }} />
      </div>
      <TopContainer>
        <Category>#환경 챌린지</Category>
        <TitleContainer>
          <span>플로깅 미션</span>
          <img src={Check} alt="체크 아이콘" />
        </TitleContainer>
        <Description>
          플로깅은 걷거나 뛰면서 길가의 쓰레기를 줍는 활동이에요. <br /> 운동도
          하고 환경도 지키는 일석이조 미션! <br /> 스웨덴에서 시작되어 전세계로
          확산된 라이프스타일이에요
        </Description>
      </TopContainer>
      <Toggle onChange={setCurrentMenu} />

      {currentMenu === "info" ? (
        <DetailContainer>
          <Container>
            <Title>미션, 이렇게 해보세요!</Title>
            {missionStepList.map((item, index) => (
              <MissionStep
                title={item.title}
                desctiption={item.des}
                number={index + 1}
                key={item.title}
              />
            ))}
            <Tip>
              <p>TIP</p>
              <p>처음 가보는 길, 생각보다 더 즐거울 거예요!!</p>
            </Tip>
          </Container>
          <Container>
            <Title>미션 난이도는 아래와 같아요!</Title>
            <Difficulty>
              <DifficultyTitleContainer>
                <DifficultyTitle>소요시간</DifficultyTitle>
                <DifficultySubTitle>|</DifficultySubTitle>
                <DifficultySubTitle>약 40분</DifficultySubTitle>
              </DifficultyTitleContainer>
              <DifficultyTitleContainer>
                <DifficultyTitle>난이도</DifficultyTitle>
                <DifficultySubTitle>|</DifficultySubTitle>
                <DifficultySubTitle>어려움</DifficultySubTitle>
              </DifficultyTitleContainer>
              <DifficultyTitleContainer>
                <DifficultyTitle>포인트</DifficultyTitle>
                <DifficultySubTitle>|</DifficultySubTitle>
                <DifficultySubTitle>32P</DifficultySubTitle>
              </DifficultyTitleContainer>
            </Difficulty>
          </Container>
        </DetailContainer>
      ) : (
        <RecordContent>
          {recordList.map((item) => (
            <Record
              key={item.title}
              userName={item.name}
              time={item.time}
              title={item.title}
              content={item.content}
              image={item.img}
            />
          ))}
        </RecordContent>
      )}
    </div>
  );
};

const TopContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 20px 24px 36px 24px;
`;

const Category = styled.div`
  ${({ theme }) => theme.font.medium14};
  color: ${({ theme }) => theme.color.greenScale300};
  background-color: #e7fff7;
  padding: 8px 12px;
  border-radius: 20px;
  width: fit-content;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.font.semi24};
  line-height: 22px;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.medium14};
  color: ${({ theme }) => theme.color.grayScale300};
  line-height: 22px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.grayScale100};
  gap: 8px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.font.semi20};
  color: ${({ theme }) => theme.color.black};
`;

const Tip = styled.div`
  background-color: #e7fff7;
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.greenScale300};
  display: flex;
  gap: 12px;
  border-radius: 8px;
`;

const Difficulty = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  gap: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
`;

const DifficultyTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const DifficultyTitle = styled.p`
  font-size: 12px;
  color: black;
  width: 72px;
  line-height: 22px;
`;

const DifficultySubTitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.grayScale300};
  line-height: 22px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  gap: 16px;
`;

const RecordContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.grayScale100};
`;
