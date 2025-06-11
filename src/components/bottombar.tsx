import styled from "styled-components";
import { Diary, Home, Leaf, User } from "../assets";
import { Tab } from "./tab";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tab = [
    {
      icon: <Home fill={location.pathname === "/" ? "#25C56D" : "#A1A1AA"} />,
      title: "홈",
      to: "/",
    },
    {
      icon: (
        <Leaf
          fill={location.pathname === "/challenge" ? "#25C56D" : "#A1A1AA"}
        />
      ),
      title: "챌린지",
      to: "/challenge",
    },
    {
      icon: (
        <Diary fill={location.pathname === "/diary" ? "#25C56D" : "#A1A1AA"} />
      ),
      title: "다이어리",
      to: "/diary",
    },
    {
      icon: <User fill={location.pathname === "/my" ? "#25C56D" : "#A1A1AA"} />,
      title: "마이",
      to: "/my",
    },
  ];

  return (
    <BottomBarContainer>
      {tab.map((item) => (
        <Tab
          key={item.title}
          title={item.title}
          isActive={location.pathname === item.to}
          icon={item.icon}
          onClick={() => navigate(item.to)}
        />
      ))}
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 36px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px 0px rgba(161, 161, 161, 0.04);
`;
