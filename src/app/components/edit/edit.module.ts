import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path:"question/:id", 
    component: QuestionEditComponent
  },
  {
    path:"answer/:id", 
    component: AnswerEditComponent
  },
  {
    path:"profile/:id",
    component: ProfileEditComponent
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
export class EditModule { }
