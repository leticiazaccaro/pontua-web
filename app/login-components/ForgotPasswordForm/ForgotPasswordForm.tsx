// components/LoginForm.tsx
import { useState, useEffect } from "react";
import * as Styled from "./ForgotPasswordForm.styles";
import { Input } from "../../common-components/Input/Input.styles";
import { At } from "../../common-components/svg/at";
import colors from "~/styles/Colors";
import { Button } from "../../common-components/Button/Button.styles";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../../common-components/constants/SymbolType.enum";
import InputWrapper from "~/common-components/InputWrapper/InputWrapper";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>("");
  const [onFocusEmail, setOnFocusEmail] = useState<boolean>(false);
  const [atIconColor, setAtIconColor] = useState<string>(colors.gray400);

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
        marginBottom="28px"
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <At color={atIconColor} padding="0 0 0 15px"></At>
        </InputWrapper>
        <Button type="submit" disabled={!email}>
          enviar link
        </Button>
      </Styled.Form>
    </>
  );
};

export default ForgotPasswordForm;
