import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
    constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) { }
    errorMessage!:string;
    hide = true;
    ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
      });
      this.loginForm.valueChanges.subscribe(() => {
        this.errorMessage = '';
      });
  }

    get email() { return this.loginForm.get('email'); } 
    get password() { return this.loginForm.get('password'); }
    login(){
      this.authService.loginService(this.loginForm.value.email,this.loginForm.value.password).subscribe((data)=>{
        this.router.navigate(['/member-details']);
      },(error)=>{
        this.loginForm.reset({
          email:'',
          password:''
        })
        console.log(error)
        this.errorMessage='wrong credentials'
        })
    }
    hasError() { return this.loginForm.invalid; }
}
