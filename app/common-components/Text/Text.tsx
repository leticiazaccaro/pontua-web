import type { FC, ReactNode } from "react";
import * as Styled from "./Text.styles";
import { TextTypes } from "../constants/TextType.enum";

type Props = {
  children?: ReactNode | ReactNode[];
  type: TextTypes;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
} & Styled.TextProps;

const Text: FC<Props> = ({ children, type, onClick, ...styleProps }) => {
  switch (type) {
    case TextTypes.TITLE:
      return <Styled.Title {...styleProps}>{children}</Styled.Title>;
    case TextTypes.PARAGRAPH:
      return <Styled.Paragraph {...styleProps}>{children}</Styled.Paragraph>;
    case TextTypes.SPAN:
      return (
        <Styled.Span onClick={onClick} {...styleProps}>
          {children}
        </Styled.Span>
      );
  }
};

export default Text;
