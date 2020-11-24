import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { NewquestionComponent } from './components/question/newquestion/newquestion.component';
import { UpdateDeleteComponent } from './components/update-delete/update-delete.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
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
      },
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
  },
  {
    "path":"edit",
    children: [
      {
        path:"question/:id",
        component:UpdateDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
