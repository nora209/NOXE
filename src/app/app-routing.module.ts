import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ContactUs/about.component';
import { AuthGuard } from './gards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';


import { NotfoundComponent } from './notfound/notfound.component';
import { PeapleComponent } from './peaple/peaple.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
 {path:'home',canActivate:[AuthGuard],component:HomeComponent},
 {path:'about',canActivate:[AuthGuard],component:AboutComponent},
 {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},

 {path:'Tv',canActivate:[AuthGuard],component:TvComponent},
 {path:'peaple',canActivate:[AuthGuard],component:PeapleComponent},
 {path:'moviedetails/:id',canActivate:[AuthGuard],component:MoviedetailsComponent},

 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 
 {path:'* *',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
