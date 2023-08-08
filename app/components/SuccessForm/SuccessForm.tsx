import { Button } from "../Button/Button.styles";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../constants/SymbolType.enum";

const SuccessForm = () => {
  return (
    <>
      <HeaderLoginForms
        title="Tudo certo"
        description="Foi enviado um e-mail para você com instruções de como redefinir a sua senha."
        simbol={SymbolType.SMILE}
        marginBottom="28px"
      ></HeaderLoginForms>
      <Button type="submit" margin="26px 0 0 0">voltar para o login</Button>
    </>
  );
};

export default SuccessForm;
