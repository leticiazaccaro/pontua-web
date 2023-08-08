import styled from "styled-components";
import colors from "../../styles/Colors";

export type InputWrapperProps = {
  marginBottom: string;
};

export const Form = styled.form`
  margin-top: 10px;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  height: 59px;
  padding: 8px 15px 8px 15px;
  border-radius: 10px;
  border: 1px solid ${colors.gray400};
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
`;

export const ForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
