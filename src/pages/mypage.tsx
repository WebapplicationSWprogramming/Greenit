import styled from "styled-components";
import { TopBar } from "../components/topbar";
import { ProfileImg } from "../assets";
import { BottomBar } from "../components/bottombar";

export const MyPage = () => {
  const mission = [
    {
      title: "누적 미션 완료 수",
      point: 21,
    },
    {
      title: "오늘의 미션 클리어 수",
      point: 5,
    },
    {
      title: "연속 미션 클리어수",
      point: 4,
    },
    {
      title: "기록된 다이어리 수",
      point: 12,
    },
    {
      title: "내가 인증한 미션 수",
      point: 21,
    },
  ];
  return (
    <MyPageContainer>
      <TopBar title="마이페이지" />
      <Profile>
        <img src={ProfileImg} width={64} height={64} alt="프로필" />
        <TitleContainer>
          <Title>
            <HighLight>Test12</HighLight>님, 지금까지
          </Title>
          <Title>
            총 <HighLight>102P</HighLight>만큼
          </Title>
          <Title>그린 포인트를 모았어요!!</Title>
        </TitleContainer>
      </Profile>
      <Ex>마이페이지에서 내 활동을 한눈에 확인해보세요</Ex>
      <MissionContainer>
        {mission.map((item) => (
          <Misstion key={item.title}>
            <MissionTitle>{item.title}</MissionTitle>
            <Point>{item.point}</Point>
          </Misstion>
        ))}
      </MissionContainer>
      <BottomBar />
    </MyPageContainer>
  );
};

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 40px;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.semi20}
  color: ${({ theme }) => theme.color.black};
`;

const HighLight = styled.span`
  color: ${({ theme }) => theme.color.greenScale400};
`;

const MyPageContainer = styled.div`
  margin-top: 54px;
`;

const Ex = styled.div`
  background-color: #e7fff7;
  color: ${({ theme }) => theme.color.greenScale300};
  padding: 8px 16px;
  ${({ theme }) => theme.font.medium14}
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
`;

const Misstion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale100};
`;

const Point = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.greenScale400};
`;

const MissionTitle = styled.p`
  ${({ theme }) => theme.font.medium14}
  color: ${({ theme }) => theme.color.black};
`;
