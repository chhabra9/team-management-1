import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LoggedIn:Boolean=false;
  constructor(private http : HttpClient) { }
    registrationService(user:User){
      this.LoggedIn=true;
      return this.http.post('http://localhost:3000/auth/register',user)
   }
   loginService(email:any,password:any){
    this.LoggedIn=true;
    return this.http.post('http://localhost:3000/auth/login',{email,password})
 }  
   isloggedIn(){
    return this.LoggedIn;
   }
}
