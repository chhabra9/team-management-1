import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TeamServicesService} from '../services/team-services.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  constructor(private fb: FormBuilder,private router: ActivatedRoute,private teamService: TeamServicesService,private route:Router) { }
 
  memberForm= this.fb.group({
      firstName: [''],
      lastName: [''],
      jobTitle: [''],
      status:[''],
      team: ['']
  },{updates:onblur})
  id!:string
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];  
  const member=this.teamService.getTeamMemberById(this.id).subscribe((data)=>{
    this.memberForm.reset({
      firstName: data.firstName,
      lastName: data.lastName,
      jobTitle: data.jobTitle,
      status: data.status,
      team: data.team
    })
  });
  }
  hide = true;
  get firstName() { return this.memberForm.get('firstName'); }
  get jobTitle() { return this.memberForm.get('jobTitle'); } 
  get status() { return this.memberForm.get('status'); }
  get team() { return this.memberForm.get('team'); }
  hasError() { return this.memberForm.invalid; }
  updateMember(){
    try{
    this.teamService.updateTeamMember(this.id,this.memberForm.value).subscribe((data)=>{
      console.log(data)
    })
    this.memberForm.reset({
      firstName: '',
      lastName: '',
      jobTitle: '',
      status: '',
      team: ''
    });
    this.route.navigate(['/member-details'])
  }catch(e:any){
    alert(e.message);
  }
  }
}
