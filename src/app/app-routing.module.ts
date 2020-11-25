import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { NewquestionComponent } from './components/question/newquestion/newquestion.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoginGuard } from './guards/login.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    "path": "",
    component: MainLayoutComponent,
    children: [
    ]
  },
  {
    "path": "users",
    loadChildren: () => import("./components/user/user.module").then(n => n.UserModule),
  },
  {
    "path": "questions",
    children: [
      {
        path: "ask",
        canActivate: [LoginGuard],
        component: NewquestionComponent
      },
      {
        path: ":id/:slug",
        component: QuestionDetailComponent
      },
    ]
  },
  {
    "path": "profile",
    children: [
      {
        path: ":id",
        component: ProfileComponent,
      }
    ]
  },
  {
    "path": "edit",
    loadChildren: () => import("./components/edit/edit.module").then(n => n.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
