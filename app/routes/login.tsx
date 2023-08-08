import type { V2_MetaFunction } from "@remix-run/node";
import { Logo } from "~/common-components/svg/logo";
import * as Styled from "~/styles/Login.styles";
import colors from "~/styles/Colors";
import building from "../assets/png/building.png";
// import ForgotPasswordForm from "~/login-components/ForgotPasswordForm/ForgotPasswordForm";
import LoginForm from "~/login-components/LoginForm/LoginForm";
// import SelectHeroForm from "~/login-components/SelectHeroForm/SelectHeroForm";
// import SuccessForm from "~/components/SuccessForm/SuccessForm";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pontua web" }];
};

export default function Login() {
  return (
    <Styled.Main>
      <Styled.Header>
        <Logo color={colors.white}></Logo>
      </Styled.Header>
      <Styled.Container>
        <Styled.Image src={building}></Styled.Image>
        <Styled.Card>
          <LoginForm></LoginForm>
        </Styled.Card>
      </Styled.Container>
    </Styled.Main>
  );
}
