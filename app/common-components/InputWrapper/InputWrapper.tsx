import type { FC, ReactNode } from "react";
import * as Styled from "./InputWrapper.styles";

type Props = {
  children?: ReactNode | ReactNode[];
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
} & Styled.InputWrapperProps;

const InputWrapper: FC<Props> = ({
  children,
  onFocus,
  onBlur,
  ...styleProps
}) => {
  return (
    <Styled.InputWrapper
      {...styleProps}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </Styled.InputWrapper>
  );
};

export default InputWrapper;
