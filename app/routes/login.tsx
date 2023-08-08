import type { V2_MetaFunction } from "@remix-run/node";
import { Logo } from "~/components/svg/logo";
import * as Styled from "~/styles/Login.styles";
import colors from "~/styles/Colors";
import building from "../assets/png/building.png";
import Text from "~/components/Text/Text";
import LoginForm from "~/components/LoginForm/LoginForm";
import { TextTypes } from "~/components/constants/TextTypes.enum";

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
          <Styled.Title>
            <Text type={TextTypes.TITLE}>Bem-vindo</Text>
            <Styled.Point></Styled.Point>
          </Styled.Title>
          <Text type={TextTypes.PARAGRAPH}>
            informe as suas credenciais de acesso ao portal
          </Text>
          <LoginForm></LoginForm>
        </Styled.Card>
      </Styled.Container>
    </Styled.Main>
  );
}
