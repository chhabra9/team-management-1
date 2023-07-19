import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(private fb: FormBuilder,private authService:AuthService,private router: Router) { }
  errorMessage!:string;
  registrationForm!:FormGroup;
  passwordExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&*])[A-Za-z\d@@$!%*?&]{8,}$/;
  hide = true;
  ngOnInit(): void {
    this.registrationForm= this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      email: ['',[Validators.required,Validators.email]],
      phoneNumber:['',Validators.required],
      password: ['',[Validators.required,Validators.pattern(this.passwordExp)]]
  })
  this.registrationForm.valueChanges.subscribe(() => {
    this.errorMessage = '';
  });
  }

  get firstName() { return this.registrationForm.get('firstName'); }
  get phoneNumber() { return this.registrationForm.get('phoneNumber'); } 
  get email() { return this.registrationForm.get('email'); } 
  get password() { return this.registrationForm.get('password'); }
  createUser(){
    const user:User=this.registrationForm.value;
    console.log(this.registrationForm.value);
    this.authService.registrationService(user).subscribe((data)=>{
    this.router.navigate(['/member-details']);

    },(error)=>{
      this.registrationForm.reset({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'',
        password: ''    })

      this.errorMessage="Email already Registered"
    })
  }
  hasError() { return this.registrationForm.invalid; }
}
