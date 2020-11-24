import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginGuard } from 'src/app/guards/login.guard';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
  {
    path:"signup",
    component: SignUpComponent,
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"logout",
    canActivate:[LoginGuard],
    component:LogoutComponent
  },
  {
    path:":id",
    component:ProfileComponent
  }
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
