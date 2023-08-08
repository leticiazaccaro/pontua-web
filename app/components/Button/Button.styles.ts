import styled from "styled-components";
import colors from "../../styles/Colors";

export type ButtonProps = {
  margin?: string;
  width?: string;
  height?: string;
  size?: string;
  weight?: string;
  radius?: string;
  float?: string;
};

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "57px")};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  background-color: ${colors.blue600};
  color: ${colors.white};
  font-size: ${({ size }) => (size ? size : "1.5rem")};
  line-height: 1.538rem;
  font-weight: ${({ weight }) => (weight ? weight : 700)};
  cursor: pointer;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  float: ${({ float }) => (float ? float : "none")};

  &:disabled {
    background-color: ${colors.disabled};
  }
`;
