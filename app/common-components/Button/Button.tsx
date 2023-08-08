import type { FC, ReactNode } from "react";
import * as Styled from "./Button.styles";

type Props = {
  children?: ReactNode | ReactNode[];
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Styled.ButtonProps;

const Button: FC<Props> = ({
  children,
  type,
  disabled,
  onClick,
  ...styleProps
}) => {
  return (
    <Styled.Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...styleProps}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
