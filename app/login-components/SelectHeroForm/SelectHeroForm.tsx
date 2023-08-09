import Dropdown from "../Dropdown/Dropdown";
import HeaderLoginForms from "../HeaderLoginForms/HeaderLoginForms";
import { SymbolType } from "../../common-components/constants/SymbolType.enum";
import Button from "~/common-components/Button/Button";
import { useNavigate } from "@remix-run/react";
import CryptoJS from "crypto-js";

const SelectHeroForm = () => {
  let options: any[] = [];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const publicKey = "fe340e1acc9aa129b42f7ebcefc34ad7";
  const privateKey = "a3cb75769da71e269a5008f798e570e0039312a5";
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(`${timestamp}${privateKey}${publicKey}`).toString();

  const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const response = data?.data?.results;
    options = response.map((r: any) => {
      return {
        label: r?.name,
        value: r?.name,
        thumbnail: r.thumbnail?.path
      }
    });
    console.log("GO GO GO", options);
  })
  .catch(error => {
    console.error('Erro:', error);
  });

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
