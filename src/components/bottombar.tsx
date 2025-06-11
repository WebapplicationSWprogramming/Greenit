import styled from "styled-components";
import { Diary, Home, Leaf, User } from "../assets";
import { Tab } from "./tab";
import { useNavigate } from "react-router-dom";

export const BottomBar = () => {
  const navigate = useNavigate();
  const tab = [
    {
      icon: Home,
      title: "홈",
      isActive: true,
      to: "/",
    },
    {
      icon: Leaf,
      title: "챌린지",
      isActive: false,
      to: "/challenge",
    },
    {
      icon: Diary,
      title: "다이어리",
      isActive: false,
      to: "/diary",
    },
    {
      icon: User,
      title: "마이",
      isActive: false,
      to: "/my",
    },
  ];
  return (
    <BottomBarContainer>
      {tab.map((item) => (
        <Tab
          key={item.title}
          title={item.title}
          isActive={item.isActive}
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
