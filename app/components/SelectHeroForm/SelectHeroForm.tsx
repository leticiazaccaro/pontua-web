import { Button } from "../Button/Button.styles";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../constants/SymbolType.enum";

const SelectHeroForm = () => {
  return (
    <>
      <HeaderLoginForms
        title="Selecione o seu agente mais legal"
        description="Tenha a visão completa do seu agente."
        simbol={SymbolType.DOT}
        marginBottom="32px"
      ></HeaderLoginForms>
      <Button
        margin="16px 0 0 0"
        width="88px"
        height="48px"
        radius="8px"
        size="1rem"
        weight="600"
        float="right"
      >
        Entrar
      </Button>
    </>
  );
};

export default SelectHeroForm;
