import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string='';
  constructor(private _authService:AuthService, private _Router:Router) { }

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.email, Validators.required]),
    password:new FormControl(null,[Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
  })
  submitLoginForm(loginForm:FormGroup){
    this._authService.login(loginForm.value).subscribe((responce)=>{
    if(responce.message == 'success')
    {
      localStorage.setItem('UserToken',responce.token)
      this._authService.saveCurrentUser();
      this._Router.navigate(['/home'])

    }else{
      this.error= responce.errors.email.message;
    }
  });
  }


  ngOnInit(): void {
  }

}
