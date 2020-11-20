import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewquestionComponent } from './components/newquestion/newquestion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginGuard } from './guards/login.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    "path":"",
    component:MainLayoutComponent,
    children: [
    ]
  },
  {
    "path":"users",
    children: [
      {
        path:"signup",
        component: SignUpComponent
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
  },
  {
    "path":"questions",
    children: [
      {
        path:"ask",
        canActivate:[LoginGuard],
        component:NewquestionComponent
      },
      {
        path:":id/:slug",
        component:QuestionDetailComponent
      }
    ]
  },
  {
    "path":"profile",
    children: [
      {
      path:":id",
      component:ProfileComponent,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
