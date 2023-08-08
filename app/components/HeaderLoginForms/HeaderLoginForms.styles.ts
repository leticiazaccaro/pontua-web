import styled from "styled-components";
import colors from "../../styles/Colors";

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
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
