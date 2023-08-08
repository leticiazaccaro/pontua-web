import styled from "styled-components";
import colors from "../../styles/Colors";

export type InputWrapperProps = {
  marginBottom?: string;
  borderColor?: string;
  border?: string;
  height?: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : "59px")};
  padding: 8px 15px 8px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  border: ${({ border, borderColor }) =>
    border
      ? border
      : `1px solid ${borderColor ? borderColor : colors.gray400}`};
`;
