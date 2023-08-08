// components/LoginForm.tsx
import { useState, useEffect } from "react";
import * as Styled from "./ForgotPasswordForm.styles";
import { Input } from "../Input/Input.styles";
import { At } from "../svg/at";
import colors from "~/styles/Colors";
import { Button } from "../Button/Button.styles";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../constants/SymbolType.enum";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [onFocusEmail, setOnFocusEmail] = useState<boolean>(false);
  const [atIconColor, setAtIconColor] = useState<string>(colors.gray400);

  const paddingIcons = "0 0 0 15px";

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    onFocusEmail
      ? setAtIconColor(colors.blue500)
      : setAtIconColor(colors.gray400);
  }, [onFocusEmail]);

  return (
    <>
      <HeaderLoginForms
        title="Recuperar senha"
        description="Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha."
        simbol={SymbolType.DOT}
      ></HeaderLoginForms>
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
        <Button type="submit" margin="0 0 21px 0" disabled={!email}>
          enviar link
        </Button>
      </Styled.Form>
    </>
  );
};

export default ForgotPasswordForm;
