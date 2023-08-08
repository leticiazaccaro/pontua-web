import styled from "styled-components";
import colors from "../../styles/Colors";

export type MenuItemProps = {
  active?: boolean;
};

export const MenuItem = styled.div<MenuItemProps>`
  width: 100%;
  height: 34px;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 9.5px 0 9.5px 10.5px;
  margin: 10px 0 8px 0;
  color: ${colors.black};
  font-size: 13px;
  font-weight: 500;
  line-height: 0.833rem;

  &:hover {
    background-color: ${colors.grayBackground};
    cursor: pointer;
  }
`;
