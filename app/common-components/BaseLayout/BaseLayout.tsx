import type { FC, ReactNode } from "react";
import SideNav from "../SideNav/SideNav";
import { Logo } from "../svg/logo";
import * as Styled from "./BaseLayout.styles";
import { Dashboard } from "../svg/dashboard";
import { User } from "../svg/user";
import { CornerArrowUpLeft } from "../svg/cornerArrowUpLeft";
import Input from "../Input/Input";
import MenuItem from "../MenuItem/MenuItem";

type Props = {
  children?: ReactNode | ReactNode[];
};

const paddingIcons = "0 16.5px 0 0";

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Styled.BaseLayout>
      <SideNav>
        <Logo padding="15px 0 3px 23px" width="104.78px"></Logo>
        <Styled.Divider></Styled.Divider>
        <Styled.MenuItemContainer>
          <MenuItem active>
            <Dashboard padding={paddingIcons}></Dashboard>Home
          </MenuItem>
          <MenuItem>
            <User padding={paddingIcons}></User>Perfil
          </MenuItem>
        </Styled.MenuItemContainer>
        <Styled.Divider></Styled.Divider>
        <Styled.MenuItemContainer paddingTop="15px">
          <MenuItem>
            <CornerArrowUpLeft padding={paddingIcons}></CornerArrowUpLeft>Sair
          </MenuItem>
        </Styled.MenuItemContainer>
      </SideNav>
      <Input></Input>
    </Styled.BaseLayout>
  );
};

export default BaseLayout;
