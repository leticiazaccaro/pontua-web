import type { V2_MetaFunction } from "@remix-run/node";
import { Logo } from "~/common-components/svg/logo";
import * as Styled from "~/styles/Login.styles";
import colors from "~/styles/Colors";
import building from "../assets/png/building.png";
import ForgotPasswordForm from "~/login-components/ForgotPasswordForm/ForgotPasswordForm";
import LoginForm from "~/login-components/LoginForm/LoginForm";
import { useEffect, useState } from "react";
import { FormType } from "~/common-components/constants/FormType.enum";
import SelectHeroForm from "~/login-components/SelectHeroForm/SelectHeroForm";
import SuccessForm from "~/login-components/SuccessForm/SuccessForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pontua web" }];
};

export default function Login() {
  const [whichComponentToDisplay, setWhichComponentToDisplay] =
    useState<string>(FormType.LOGIN_FORM);

  useEffect(() => {}, [whichComponentToDisplay]);

  return (
    <Styled.Main>
      <Styled.Header>
        <Logo color={colors.white}></Logo>
      </Styled.Header>
      <Styled.Container>
        <Styled.Image src={building}></Styled.Image>
        <Styled.Card>
          {whichComponentToDisplay === FormType.LOGIN_FORM ? (
            <LoginForm
              setWhichComponentToDisplay={setWhichComponentToDisplay}
            ></LoginForm>
          ) : whichComponentToDisplay === FormType.FORGOT_PASSWORD_FORM ? (
            <ForgotPasswordForm
              setWhichComponentToDisplay={setWhichComponentToDisplay}
            ></ForgotPasswordForm>
          ) : whichComponentToDisplay === FormType.SELECT_HERO_FORM ? (
            <SelectHeroForm></SelectHeroForm>
          ) : (
            <SuccessForm
              setWhichComponentToDisplay={setWhichComponentToDisplay}
            ></SuccessForm>
          )}
        </Styled.Card>
      </Styled.Container>
    </Styled.Main>
  );
}
