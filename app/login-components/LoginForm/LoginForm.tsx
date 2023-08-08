import { useState, useEffect } from "react";
import * as Styled from "./LoginForm.styles";
import { At } from "../../common-components/svg/at";
import colors from "~/styles/Colors";
import { Eye } from "../../common-components/svg/eye";
import { Enter } from "../../common-components/svg/enter";
import { TextTypes } from "../../common-components/constants/TextType.enum";
import Text from "../../common-components/Text/Text";
import { Interrogation } from "../../common-components/svg/interrogation";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../../common-components/constants/SymbolType.enum";
import InputWrapper from "~/common-components/InputWrapper/InputWrapper";
import Input from "~/common-components/Input/Input";
import Button from "~/common-components/Button/Button";

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
    <>
      <HeaderLoginForms
        title="Bem-vindo"
        description="informe as suas credenciais de acesso ao portal"
        simbol={SymbolType.DOT}
      ></HeaderLoginForms>
      <Styled.Form onSubmit={handleSubmit}>
        <InputWrapper
          onFocus={() => setOnFocusEmail(true)}
          onBlur={() => setOnFocusEmail(false)}
          marginBottom="23px"
          borderColor={onFocusEmail ? colors.blue500 : colors.gray400}
        >
          <Input
            type="email"
            id="email"
            placeholder="Informe seu e-mail"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <At color={atIconColor} padding={paddingIcons}></At>
        </InputWrapper>
        <InputWrapper
          onFocus={() => setOnFocusPassword(true)}
          onBlur={() => setOnFocusPassword(false)}
          marginBottom="11px"
          borderColor={onFocusPassword ? colors.blue500 : colors.gray400}
        >
          <Input
            type="password"
            id="password"
            placeholder="Informe seu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Eye color={eyeIconColor} padding={paddingIcons}></Eye>
        </InputWrapper>
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
    </>
  );
};

export default LoginForm;
