import type { FC, ReactNode } from "react";
import * as Styled from "./Button.styles";

type Props = {
  children?: ReactNode | ReactNode[];
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
} & Styled.ButtonProps;

const Button: FC<Props> = ({ children, type, disabled, ...styleProps }) => {
  return (
    <Styled.Button type={type} disabled={disabled} {...styleProps}>
      {children}
    </Styled.Button>
  );
};

export default Button;
