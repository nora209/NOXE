import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isLogin:boolean=false;
  constructor(private _authService:AuthService) {
    _authService.currentUser.subscribe(()=>{
      if(_authService.currentUser.getValue() != null){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
    })
   }
isLogout(){
  this._authService.logout();
}
  ngOnInit(): void {
  }

}
