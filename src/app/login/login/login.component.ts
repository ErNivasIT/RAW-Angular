import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginapiService } from '../../loginapi.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  response:any;
  constructor(private fb: FormBuilder,private loginService:LoginapiService) { }
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
      console.log(p);
      this.setToken(this.response.token);
    });
    console.log(this.loginForm.value);
  } 
  private setToken(token: string): void {
    // Set the token as an HttpOnly cookie
    localStorage.setItem("token",this.response.token);
  }
}
