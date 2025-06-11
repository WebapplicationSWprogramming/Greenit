import styled from "styled-components";
import { Logo } from "../assets";

export const Header = () => {
  return (
    <HeaderContainer>
      <img
        onClick={() => (window.location.href = "/")}
        src={Logo}
        height={22}
        style={{ display: "flex", alignItems: "conter" }}
        alt="Logo"
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;
