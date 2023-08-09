import { json, type LoaderFunction } from "@remix-run/node";
import CryptoJS from "crypto-js";

export let loader: LoaderFunction = async () => {
  const publicKey = "fe340e1acc9aa129b42f7ebcefc34ad7";
  const privateKey = "a3cb75769da71e269a5008f798e570e0039312a5";
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(`${timestamp}${privateKey}${publicKey}`).toString();

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
  );
  const data = await response.json();

  return json(data);
};
