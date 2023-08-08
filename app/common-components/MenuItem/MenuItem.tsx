import type { FC, ReactNode } from "react";
import * as Styled from "./MenuItem.styles";

type Props = {
  children?: ReactNode | ReactNode[];
} & Styled.MenuItemProps;

const MenuItem: FC<Props> = ({ children, ...styleProps }) => {
  return <Styled.MenuItem {...styleProps}>{children}</Styled.MenuItem>;
};

export default MenuItem;
