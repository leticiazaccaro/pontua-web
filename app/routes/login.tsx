import type { V2_MetaFunction } from "@remix-run/node";
import { Logo } from "~/common-components/svg/logo";
import * as Styled from "~/styles/Login.styles";
import colors from "~/styles/Colors";
import building from "../assets/png/building.png";
import SelectHeroForm from "~/login-components/SelectHeroForm/SelectHeroForm";
// import LoginForm from "~/components/LoginForm/LoginForm";
// import SuccessForm from "~/components/SuccessForm/SuccessForm";
// import ForgotPasswordForm from "~/components/ForgotPasswordForm/ForgotPasswordForm";

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
          <SelectHeroForm></SelectHeroForm>
        </Styled.Card>
      </Styled.Container>
    </Styled.Main>
  );
}
