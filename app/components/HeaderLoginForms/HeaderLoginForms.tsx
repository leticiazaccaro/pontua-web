// components/LoginForm.tsx
import * as Styled from "./HeaderLoginForms.styles";
import { TextTypes } from "../constants/TextType.enum";
import Text from "../Text/Text";
import type { FC } from "react";
import { SymbolType } from "../constants/SymbolType.enum";

type Props = {
  title: string;
  description: string;
  simbol: SymbolType;
} & Styled.TitleProps;

const HeaderLoginForms: FC<Props> = ({
  title,
  description,
  simbol,
  ...styleProps
}) => {
  return (
    <>
      <Styled.Title {...styleProps}>
        <Text type={TextTypes.TITLE}>{title}</Text>
        {simbol === SymbolType.DOT ? (
          <Styled.Point></Styled.Point>
        ) : (
          <Styled.Smile> ;)</Styled.Smile>
        )}
      </Styled.Title>
      <Text type={TextTypes.PARAGRAPH}>{description}</Text>
    </>
  );
};

export default HeaderLoginForms;
