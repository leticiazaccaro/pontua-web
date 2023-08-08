import styled from "styled-components";
import colors from "../../styles/Colors";

export type ButtonProps = {
  margin?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 57px;
  border-radius: 10px;
  background-color: ${colors.blue600};
  color: ${colors.white};
  font-size: 24px;
  line-height: 1.538rem;
  font-weight: 700;
  cursor: pointer;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: ${colors.disabled};
  }
`;
