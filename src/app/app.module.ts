import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TopQuestionsComponent } from './components/top-questions/top-questions.component';
import { MatCardModule } from '@angular/material/card';
import { NewquestionComponent } from './components/newquestion/newquestion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { CKEditorModule } from 'ng2-ckeditor';
import { LogoutComponent } from './components/logout/logout.component';
import { MatDividerModule } from '@angular/material/divider';
import { LoginGuard } from './guards/login.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionDetailBodyComponent } from './components/question-detail/question-detail-body/question-detail-body.component';
import { AnswersSectionComponent } from './components/question-detail/answers-section/answers-section.component';
import { LikeComponent } from './components/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    SignUpComponent,
    LoginComponent,
    TopQuestionsComponent,
    NewquestionComponent,
    LogoutComponent,
    QuestionDetailComponent,
    AnswersSectionComponent,
    ProfileComponent,
    QuestionDetailBodyComponent,
    LikeComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    NgbModule,
    MatDialogModule,
    CKEditorModule,
    MatDividerModule
  ],
  providers: [
    LoginGuard, 
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
