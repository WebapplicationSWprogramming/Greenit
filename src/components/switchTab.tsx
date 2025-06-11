import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface ToggleProps {
  onChange: (menu: "info" | "reco") => void;
}

export const Toggle = ({ onChange }: ToggleProps) => {
  const [currentMenu, setCurrentMenu] = useState<"info" | "reco">("info");
  const [xpos, setXpos] = useState<number | undefined>(0);
  const applicationBtn = useRef<HTMLButtonElement | null>(null);
  const earlyReturnBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (currentMenu === "info" && applicationBtn.current) {
      setXpos(applicationBtn.current.offsetLeft);
    } else if (currentMenu === "reco" && earlyReturnBtn.current) {
      setXpos(earlyReturnBtn.current.offsetLeft);
    }
    onChange(currentMenu);
  }, [currentMenu, onChange]);

  return (
    <MenuContainer>
      <UnderLine left={xpos} />
      <MenuWrapper>
        <StyledBtn
          name="recommend"
          ref={applicationBtn}
          isActive={currentMenu === "info"}
          onClick={() => setCurrentMenu("info")}
        >
          정보
        </StyledBtn>
        <StyledBtn
          name="request"
          ref={earlyReturnBtn}
          isActive={currentMenu === "reco"}
          onClick={() => setCurrentMenu("reco")}
        >
          기록
        </StyledBtn>
      </MenuWrapper>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;
  width: fit-content;
  border-radius: 12px;
  padding: 4px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  height: 43px;
  gap: 8px;
  width: 100%;
`;

const StyledBtn = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  ${({ theme }) => theme.font.semi16}
  z-index: 1;
  width: 50%;
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.greenScale300 : theme.color.grayScale500};
`;

const UnderLine = styled.div<{ left?: number }>`
  width: 49%;
  height: 45px;
  border-radius: 8px;
  position: absolute;
  left: ${(props) => (props.left ?? 0) + "px"};
  transition: left 0.5s ease;
  z-index: 0;
  border: 1px solid ${({ theme }) => theme.color.greenScale300};
`;
