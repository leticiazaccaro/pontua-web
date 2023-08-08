import type { FC, ReactNode } from "react";
import * as Styled from "./SideNav.styles";

type Props = {
  children?: ReactNode | ReactNode[];
};

const SideNav: FC<Props> = ({ children }) => {
  return <Styled.SideNav>{children}</Styled.SideNav>;
};

export default SideNav;
