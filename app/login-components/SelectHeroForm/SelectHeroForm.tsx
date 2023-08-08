import Dropdown from "../Dropdown/Dropdown";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../../common-components/constants/SymbolType.enum";
import Button from "~/common-components/Button/Button";
import { useNavigate } from "@remix-run/react";

const SelectHeroForm = () => {
  const options = [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderLoginForms
        title="Selecione o seu agente mais legal"
        description="Tenha a visão completa do seu agente."
        simbol={SymbolType.DOT}
        marginBottom="32px"
      ></HeaderLoginForms>
      <Dropdown options={options} margin="10px 0 0 0"></Dropdown>
      <Button
        margin="16px 0 0 0"
        width="88px"
        height="48px"
        radius="8px"
        size="1rem"
        weight={600}
        float="right"
        onClick={handleClick}
      >
        Entrar
      </Button>
    </>
  );
};

export default SelectHeroForm;
