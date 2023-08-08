import styled from "styled-components";
import colors from "../../styles/Colors";

type MenuItemContainerProps = {
  paddingTop?: string;
};

export const BaseLayout = styled.div`
  display: flex;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.divider};
`;

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  padding: 0 20px 0 16px;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)};
`;

export const SearchContainer = styled.div`
  width: 100%;
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  padding: 19px 21px 0 27px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3);
  column-gap: 10px;
  grid-row-gap: 10px;

  div:nth-child(9),
  div:nth-child(10) {
    grid-column: span 2;
  }
`;
