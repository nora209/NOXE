import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

error:string='';

  constructor(private _authService:AuthService , private _Router:Router) { }
  registerForm = new FormGroup({
  first_name:new FormControl(null,[ Validators.required,Validators.minLength(3),Validators.pattern('^[a-z]{3,10}$') , Validators.maxLength(10)]),
  last_name:new FormControl(null, [ Validators.required,Validators.minLength(3),Validators.pattern('^[a-z]{3,10}$') , Validators.maxLength(10)]),
  age:new FormControl(null,[Validators.required, Validators.min(16), Validators.max(80)]),
  email:new FormControl(null,[Validators.email, Validators.required]),
  password:new FormControl(null,[Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
  })
   
  submitRegisterForm(registerForm:FormGroup){
    this._authService.register(registerForm.value).subscribe((responce)=>{
      if(responce.message == 'success')
      {
        localStorage.setItem('UserToken',responce.token)
        this._Router.navigate(['/login'])

      }else{
        this.error= responce.errors.email.message;
      }
    });
  }


  ngOnInit(): void {
  }

}
