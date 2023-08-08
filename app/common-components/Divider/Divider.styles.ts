import styled from "styled-components";
import colors from "../../styles/Colors";

type DividerProps = {
  margin?: string;
};

export const Divider = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  background-color: ${colors.divider};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;
