import {prodotto} from "./prodotto";
import {creditcard} from "./creditcard";

export class user{

  id?:number;

  nome:string;

  cognome:string;

  username:string;

  password:string;

  listaProdotti?:prodotto[];

  listaCarte?:creditcard[];
}
