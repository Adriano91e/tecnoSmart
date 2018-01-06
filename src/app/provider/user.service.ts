import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {user} from "../model/user";
import {BACKEND_URL_USER} from "../util";
import 'rxjs/add/operator/map'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  Login(user) {
    return this.http.post(BACKEND_URL_USER+"/login",user,httpOptions);
  }

  Register(user) {
    return this.http.post(BACKEND_URL_USER + "/register", user, httpOptions);
  }

  Logout(){
    return this.http.options(BACKEND_URL_USER+"/logout", {responseType:'text'});
  }
}
