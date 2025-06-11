import styled from "styled-components";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  border?: boolean;
}

export const Button = ({
  onClick,
  disabled,
  children,
  border,
}: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} disabled={disabled} border={border}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ border?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 14px;
  background-color: ${({ border, theme }) =>
    border ? theme.color.white : theme.color.greenScale300};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.greenScale300};
  color: ${({ border, theme }) =>
    border ? theme.color.greenScale300 : theme.color.white};
  ${({ theme }) => theme.font.semi16}
  cursor: pointer;
`;
