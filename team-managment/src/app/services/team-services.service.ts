import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../member-details/member.interface';
@Injectable({
  providedIn: 'root'
})
export class TeamServicesService {

  constructor(private http: HttpClient) { }
  getTeamMembers(){
    return this.http.get<Member[]>('http://localhost:3000/teams')
  }
  deleteTeamMember(id:string){
    return this.http.delete<Member>(`http://localhost:3000/teams/${id}`);
  }
 updateTeamMember(id:string,member:Member){
  return this.http.put<Member>(`http://localhost:3000/teams/${id}`,member);
 }
  getTeamMemberById(id:string){
    return this.http.get<Member>(`http://localhost:3000/teams/${id}`);
  }
  addTeamMember(member:Member){
   return this.http.post('http://localhost:3000/teams',member)
  };
}
