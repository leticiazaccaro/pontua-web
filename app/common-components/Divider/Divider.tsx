import type { FC } from "react";
import * as Styled from "./Divider.styles";

type Props = {
  margin?: string;
};

const Divider: FC<Props> = ({ margin }) => {
  return <Styled.Divider margin={margin}></Styled.Divider>;
};

export default Divider;
