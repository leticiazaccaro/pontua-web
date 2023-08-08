import type { FC, ReactNode } from "react";
import * as Styled from "./Button.styles";

type Props = {
  children?: ReactNode | ReactNode[];
} & Styled.ButtonProps;

const Button: FC<Props> = ({ children, ...styleProps }) => {
  return <Styled.Button {...styleProps}>{children}</Styled.Button>;
};

export default Button;
