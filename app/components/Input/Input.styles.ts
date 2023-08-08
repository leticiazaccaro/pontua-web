import styled from "styled-components";
import colors from "../../styles/Colors";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: ${colors.blue500};
  font-size: 16px;
  line-height: 1.025rem;
  font-weight: 700;

  &::placeholder {
    color: ${colors.gray400};
    font-weight: 400;
    font-size: 14px;
  }
`;
