import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../../common-components/constants/SymbolType.enum";
import Button from "~/common-components/Button/Button";
import type { FC } from "react";
import { FormType } from "~/common-components/constants/FormType.enum";

type Props = {
  setWhichComponentToDisplay?: any;
};

const SuccessForm: FC<Props> = ({ setWhichComponentToDisplay }) => {
  const handleClick = () => {
    setWhichComponentToDisplay(FormType.LOGIN_FORM);
  };

  return (
    <>
      <HeaderLoginForms
        title="Tudo certo"
        description="Foi enviado um e-mail para você com instruções de como redefinir a sua senha."
        simbol={SymbolType.SMILE}
        marginBottom="28px"
      ></HeaderLoginForms>
      <Button onClick={handleClick} margin="26px 0 0 0">
        voltar para o login
      </Button>
    </>
  );
};

export default SuccessForm;
