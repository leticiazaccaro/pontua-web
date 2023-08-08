import styled from "styled-components";
import colors from "../../styles/Colors";

export type TextProps = {
  weight?: number;
  color?: string;
  size?: string;
  fontFamily?: string;
};

export const Title = styled.h1<TextProps>`
  color: ${({ color }) => (color ? color : colors.blue600)};
  font-size: ${({ size }) => (size ? size : "2.25rem")};
  line-height: 2.306rem;
  font-weight: ${({ weight }) => (weight ? weight : 700)};
  width: fit-content;
`;

export const Paragraph = styled.p<TextProps>`
  color: ${({ color }) => (color ? color : colors.gray500)};
  font-size: ${({ size }) => (size ? size : "1rem")};
  line-height: 1.27rem;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
`;

export const Span = styled.span<TextProps>`
  color: ${({ color }) => (color ? color : colors.gray500)};
  font-size: ${({ size }) => (size ? size : "0.688rem")};
  line-height: 0.704rem;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "sans-serif")};
`;
