import styled from "styled-components";
import colors from "../../styles/Colors";

export type TitleProps = {
  marginBottom?: string;
};

export const Title = styled.div<TitleProps>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "16px"};
`;

export const Point = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: ${colors.orange500};
  margin-bottom: 7px;
`;

export const Smile = styled.span`
  color: ${colors.orange500};
  font-size: 2.063rem;
  font-weight: 700;
  margin-left: 5px;
`;
