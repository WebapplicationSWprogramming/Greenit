import styled from "styled-components";

interface TabProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export const Tab = ({ title, icon, onClick, isActive }: TabProps) => {
  return (
    <Container $isActive={isActive} onClick={onClick}>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 48px;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.greenScale400 : theme.color.grayScale500};
`;

const Title = styled.div`
  ${({ theme }) => theme.font.medium14}
  white-space: nowrap;
`;
