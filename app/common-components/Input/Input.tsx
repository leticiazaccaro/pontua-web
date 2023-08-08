import type { FC } from "react";
import * as Styled from "./Input.styles";

type Props = {
  type?: string;
  id?: string;
  value?: any;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<Props> = ({ type, id, value, placeholder, onChange }) => {
  return (
    <Styled.Input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
