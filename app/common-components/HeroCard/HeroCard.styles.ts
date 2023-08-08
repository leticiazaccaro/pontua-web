import styled from "styled-components";
import colors from "../../styles/Colors";

export const HeroCard = styled.div`
  width: 100%;
  height: 147px;
  display: flex;
  background-color: ${colors.gray100};
  border-radius: 15px;
  box-shadow: 0px 6px 18px 0px #0000000f;
  padding: 14px 10px;
`;

export const TextContainer = styled.div`
  max-height: 116px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 84px;
  height: 118px;
  border-radius: 9px;
  margin-right: 14px;
`;
