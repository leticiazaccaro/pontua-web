import styled from "styled-components";

type MenuItemContainerProps = {
  paddingTop?: string;
};

export const BaseLayout = styled.div`
  display: flex;
`;

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  padding: 0 20px 0 16px;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)};
`;

export const SearchContainer = styled.div`
  width: 100%;
`;
