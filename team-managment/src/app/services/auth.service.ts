import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
    registrationService(user:User){
      return this.http.post<User>('http://localhost:3000/auth/register',user)
   }
}
