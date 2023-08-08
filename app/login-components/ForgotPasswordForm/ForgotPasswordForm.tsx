// components/LoginForm.tsx
import { useState, useEffect } from "react";
import type { FC } from "react";
import * as Styled from "./ForgotPasswordForm.styles";
import { At } from "../../common-components/svg/at";
import colors from "~/styles/Colors";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../../common-components/constants/SymbolType.enum";
import InputWrapper from "~/common-components/InputWrapper/InputWrapper";
import Input from "~/common-components/Input/Input";
import Button from "~/common-components/Button/Button";
import Text from "~/common-components/Text/Text";
import { TextTypes } from "~/common-components/constants/TextType.enum";
import { FormType } from "~/common-components/constants/FormType.enum";

type Props = {
  setWhichComponentToDisplay?: any;
};

const ForgotPasswordForm: FC<Props> = ({ setWhichComponentToDisplay }) => {
  const [email, setEmail] = useState<string>("");
  const [onFocusEmail, setOnFocusEmail] = useState<boolean>(false);
  const [atIconColor, setAtIconColor] = useState<string>(colors.gray400);
  const [emailError, setEmailError] = useState<string>("");

  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let isValid = true;
    let isValidEmail = true;

    if (!email) {
      setEmailError("O campo de email é obrigatório.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("O campo de email não está no formato correto.");
      isValidEmail = emailRegex.test(email);
    } else {
      setEmailError("");
    }

    if (isValid && isValidEmail) {
      setWhichComponentToDisplay(FormType.SUCCESS_FORM);
    }
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
          marginBottom="5"
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
        <Text
          type={TextTypes.PARAGRAPH}
          color={colors.orange400}
          size="0.688rem"
          margin="0 0 23px"
        >
          {emailError}
        </Text>
        <Button type="submit" disabled={!email}>
          enviar link
        </Button>
      </Styled.Form>
    </>
  );
};

export default ForgotPasswordForm;
