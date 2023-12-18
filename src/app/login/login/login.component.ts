import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginapiService } from '../../loginapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  response:any;
  constructor(private fb: FormBuilder,private loginService:LoginapiService,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  loginForm!: FormGroup;
  onSubmit() {
    this.loginService.loginUser(this.loginForm.value)
    .subscribe(p=>{
      console.log((<any>p).token);
      this.setToken((<any>p).token);
    });
    console.log(this.loginForm.value);
  } 
  private setToken(token: string): void {
    // Set the token as an HttpOnly cookie
    localStorage.setItem("token",token);
    this.router.navigate(['home']);
  }
}
