import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient, private _Router:Router) {
    if(localStorage.getItem('UserToken') != null)
    {
      this.saveCurrentUser();
    }
   }
  currentUser = new BehaviorSubject(null);

  saveCurrentUser(){
    let token:any = localStorage.getItem('UserToken');
    this.currentUser.next(jwtDecode(token)); 
  }
  register(formData:any):Observable<any>{
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signup',formData);
  }

  login(formData:any):Observable<any>{
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signin',formData);
  }
  logout(){
    this.currentUser.next(null);
    localStorage.removeItem('UserToken');
    this._Router.navigate(['/login']);
  }
}
