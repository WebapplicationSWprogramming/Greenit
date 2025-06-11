import styled from "styled-components";
import { Left } from "../assets";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  title: string;
}

export const TopBar = ({ title }: TopBarProps) => {
  const navigate = useNavigate();
  return (
    <TopbarStyle>
      <Img src={Left} onClick={() => navigate(-1)} alt="뒤로가기" />
      <p>{title}</p>
      <Div></Div>
    </TopbarStyle>
  );
};

const TopbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const Div = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;
