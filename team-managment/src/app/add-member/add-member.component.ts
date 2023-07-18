import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamServicesService } from '../services/team-services.service';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  constructor(private fb: FormBuilder,private router: Router,private teamService:TeamServicesService) { }
  memberForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      jobTitle: ['',Validators.required],
      status:['',Validators.required],
      team: ['',Validators.required]
  },{updates:onblur})
  hide = true;
  get firstName() { return this.memberForm.get('firstName'); }
  get jobTitle() { return this.memberForm.get('jobTitle'); } 
  get status() { return this.memberForm.get('status'); }
  get team() { return this.memberForm.get('team'); }
  hasError() { return this.memberForm.invalid; }
  addMember(){
    console.log(this.memberForm.value);
  try{
    this.teamService.addTeamMember(this.memberForm.value).subscribe((data)=>{

    });
    this.memberForm.reset({
      firstName: '',
      lastName: '',
      jobTitle: '',
      status: '',
      team: ''
    });
   this.router.navigate(['member-details']);
  }catch(e:any){
    alert(e.message);
  }
  }
}
