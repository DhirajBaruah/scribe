import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {MyblogComponent} from './myblog/myblog.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [{
  path:'', redirectTo:'home', pathMatch:'full'
},
{
  path:'home', component: HomeComponent
},
{
  path:'login', component: LoginComponent
},
{
  path:'myblog', component: MyblogComponent, canActivate:[AuthGuard]
},
{
  path:'**', redirectTo:'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
