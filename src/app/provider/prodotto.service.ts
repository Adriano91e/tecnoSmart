import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {prodotto} from "../model/prodotto";
import {BACKEND_URL_PRODOTTO} from "../util";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ProdottoService {

  constructor(private http:HttpClient) { }


  getListProdotti(): Observable<prodotto[]> {
    return this.http.get<prodotto[]>(BACKEND_URL_PRODOTTO + "/getall");
  }

  Buy(idProdotto,idCarta): Observable<prodotto> {
    return this.http.post<prodotto>(BACKEND_URL_PRODOTTO + "/addprodotto/"+idProdotto+"/"+idCarta, httpOptions);
  }

  findById(id): Observable<prodotto>{
    return this.http.get<prodotto>(BACKEND_URL_PRODOTTO + "/findbyid"+id);
  }

}
