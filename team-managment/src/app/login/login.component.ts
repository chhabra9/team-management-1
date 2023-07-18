import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private fb: FormBuilder) { }
    passwordExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&*])[A-Za-z\d@@$!%*?&]{8,}$/;
    loginForm = this.fb.group({
        firstName: ['',Validators.required],
        lastName: [''],
        email: ['',[Validators.required,Validators.email]],
        phoneNumber:['',Validators.required],
        password: ['',[Validators.required,Validators.pattern(this.passwordExp)]]
    })
    hide = true;
    get firstName() { return this.loginForm.get('firstName'); }
    get phoneNumber() { return this.loginForm.get('phoneNumber'); } 
    get email() { return this.loginForm.get('email'); } 
    get password() { return this.loginForm.get('password'); }
    hasError() { return this.loginForm.invalid; }
}
