// components/LoginForm.tsx
import { useState, useEffect } from "react";
import * as Styled from "./LoginForm.styles";
import { Input } from "../Input/Input.styles";
import { At } from "../svg/at";
import colors from "~/styles/Colors";
import { Eye } from "../svg/eye";
import { Button } from "../Button/Button.styles";
import { Enter } from "../svg/enter";
import { TextTypes } from "../constants/TextTypes.enum";
import Text from "../Text/Text";
import { Interrogation } from "../svg/interrogation";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [onFocusEmail, setOnFocusEmail] = useState<boolean>(false);
  const [atIconColor, setAtIconColor] = useState<string>(colors.gray400);
  const [onFocusPassword, setOnFocusPassword] = useState<boolean>(false);
  const [eyeIconColor, setEyeIconColor] = useState<string>(colors.gray400);

  const paddingIcons = "0 0 0 15px";

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    onFocusEmail
      ? setAtIconColor(colors.blue500)
      : setAtIconColor(colors.gray400);
  }, [onFocusEmail]);

  useEffect(() => {
    onFocusPassword
      ? setEyeIconColor(colors.blue500)
      : setEyeIconColor(colors.gray400);
  }, [onFocusPassword]);

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.InputWrapper
        onFocus={() => setOnFocusEmail(true)}
        onBlur={() => setOnFocusEmail(false)}
        marginBottom="23px"
      >
        <Input
          type="email"
          id="email"
          placeholder="Informe seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <At color={atIconColor} padding={paddingIcons}></At>
      </Styled.InputWrapper>
      <Styled.InputWrapper
        onFocus={() => setOnFocusPassword(true)}
        onBlur={() => setOnFocusPassword(false)}
        marginBottom="11px"
      >
        <Input
          type="password"
          id="password"
          placeholder="Informe seu password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Eye color={eyeIconColor} padding={paddingIcons}></Eye>
      </Styled.InputWrapper>
      <Button type="submit" margin="0 0 21px 0">
        entrar <Enter padding="0 0 0 9px"></Enter>
      </Button>
      <Styled.ForgotPassword>
        <Interrogation padding="0 5.17px 0 0"></Interrogation>
        <Text type={TextTypes.SPAN} color={colors.orange700}>
          Esqueceu a senha?
        </Text>
      </Styled.ForgotPassword>
    </Styled.Form>
  );
};

export default LoginForm;
