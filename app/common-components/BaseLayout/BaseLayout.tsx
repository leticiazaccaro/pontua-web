import type { FC, ReactNode } from "react";
import SideNav from "../SideNav/SideNav";
import { Logo } from "../svg/logo";
import * as Styled from "./BaseLayout.styles";
import { Dashboard } from "../svg/dashboard";
import { User } from "../svg/user";
import { CornerArrowUpLeft } from "../svg/cornerArrowUpLeft";
import Input from "../Input/Input";
import MenuItem from "../MenuItem/MenuItem";
import InputWrapper from "../InputWrapper/InputWrapper";
import { Search } from "../svg/search";
import colors from "~/styles/Colors";
import Divider from "../Divider/Divider";

type Props = {
  children?: ReactNode | ReactNode[];
};

const paddingIcons = "0 16.5px 0 0";

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Styled.BaseLayout>
      <SideNav>
        <Logo padding="15px 0 3px 23px" width="104.78px"></Logo>
        <Divider></Divider>
        <Styled.MenuItemContainer>
          <MenuItem active>
            <Dashboard padding={paddingIcons}></Dashboard>Home
          </MenuItem>
          <MenuItem>
            <User padding={paddingIcons}></User>Perfil
          </MenuItem>
        </Styled.MenuItemContainer>
        <Divider></Divider>
        <Styled.MenuItemContainer paddingTop="15px">
          <MenuItem>
            <CornerArrowUpLeft padding={paddingIcons}></CornerArrowUpLeft>Sair
          </MenuItem>
        </Styled.MenuItemContainer>
      </SideNav>
      <Styled.SearchContainer>
        <InputWrapper border="none" height="72px">
          <Search padding="23.88px 17.88px 22px 28.88px"></Search>
          <Input
            placeholder="Busque um agente"
            placeholderColor={colors.gray200}
          ></Input>
        </InputWrapper>
        <Divider></Divider>
        {children}
      </Styled.SearchContainer>
    </Styled.BaseLayout>
  );
};

export default BaseLayout;
