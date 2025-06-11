import { useState } from "react";
import styled from "styled-components";
import { CloseEye, OpenEye } from "../assets";

export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
}

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  password = false,
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputType = password ? (passwordVisible ? "text" : "password") : type;

  return (
    <InputContainer>
      <InputStyle
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {password && (
        <IconWrapper onClick={() => setPasswordVisible((prev) => !prev)}>
          <InputIcon
            alt={passwordVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
            src={passwordVisible ? OpenEye : CloseEye}
          />
        </IconWrapper>
      )}
    </InputContainer>
  );
};

const InputStyle = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.color.grayScale200};
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 54px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.color.grayScale200};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputIcon = styled.img`
  width: 20px;
  height: 20px;
`;
