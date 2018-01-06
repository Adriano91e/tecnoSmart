import {user} from "./user";

export class prodotto{

  id?:number;

  icona:string;

  marca:string;

  descrizione:string;

  quantita:number;

  prezzo:number;

  modello:string;

  os:string;

  cpu:string;

  ram:number;

  rom:number;

  pixelFront:number;

  pixelRear:number;

  display:string;

  batteria:number;

  recensione:string;

  user:user[];
}
