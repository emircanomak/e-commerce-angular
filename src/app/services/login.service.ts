import { ILoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl="http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }

  login(user:ILoginModel){

    return this.httpClient.get<ILoginModel>
    (this.apiUrl + "?email"+ user.email + "&password="+ user.password )
  }

  isAuthanticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false
    }
  }
}
