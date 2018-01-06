import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {creditcard} from "../model/creditcard";
import {BACKEND_URL_CARD} from "../util";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CreditcardService {

  constructor(private http:HttpClient) { }

  getListCards(): Observable<creditcard[]> {
    return this.http.get<creditcard[]>(BACKEND_URL_CARD + "/getall");
  }

  saveOrUpdate(creditCard): Observable<creditcard> {
    return this.http.post<creditcard>(BACKEND_URL_CARD + "/saveupdate/",creditCard, httpOptions);
  }

  delete(id): Observable<creditcard>{
    return this.http.delete<creditcard>(BACKEND_URL_CARD + "/deletecard/"+id);
  }
}
