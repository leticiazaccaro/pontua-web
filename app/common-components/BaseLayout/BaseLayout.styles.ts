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
