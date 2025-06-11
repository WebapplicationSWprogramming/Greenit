import styled from "styled-components";
import { useEffect, useState } from "react";

interface TimeBarProps {
  endTime: string; // ISO 포맷, 예: "2025-06-11T15:00:00+09:00"
}

export const TimeBar = ({ endTime }: TimeBarProps) => {
  const [remaining, setRemaining] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [startTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endTime);
      const total = end.getTime() - startTime.getTime();
      const passed = now.getTime() - startTime.getTime();
      const remainingMs = end.getTime() - now.getTime();

      if (total <= 0) {
        setProgress(100);
        setRemaining("종료됨");
        return;
      }

      const progressPercent = Math.min(
        100,
        Math.max(0, (passed / total) * 100)
      );
      setProgress(progressPercent);

      if (remainingMs > 0) {
        const minutes = Math.floor((remainingMs / 1000 / 60) % 60);
        const hours = Math.floor(remainingMs / 1000 / 60 / 60);
        setRemaining(`${hours}시간 ${minutes}분`);
      } else {
        setRemaining("종료됨");
        setProgress(100);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, startTime]);

  return (
    <Container>
      <TitleContainer>
        <RemainingTimeContainer>
          {remaining} {remaining !== "종료됨" ? "남음" : ""}
        </RemainingTimeContainer>
      </TitleContainer>
      <RangeBar>
        <RangeFill style={{ width: `${progress}%` }} />
      </RangeBar>
      <TimeLabels>
        <p>남은시간</p>
        <p>총 시간</p>
      </TimeLabels>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const RemainingTimeContainer = styled.div`
  background-color: #191a1f;
  color: ${({ theme }) => theme.color.white};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
`;

const RangeBar = styled.div`
  height: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayScale100};
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
`;

const RangeFill = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color.greenScale500};
  transition: width 0.5s ease;
`;

const TimeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.color.grayScale500};
`;
