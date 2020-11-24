import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatDividerModule } from '@angular/material/divider';
import { LoginGuard } from './guards/login.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionDetailBodyComponent } from './components/question-detail/question-detail-body/question-detail-body.component';
import { AnswersSectionComponent } from './components/question-detail/answers-section/answers-section.component';
import { LikeComponent } from './components/like/like.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { NewquestionComponent } from './components/question/newquestion/newquestion.component';
import { TopQuestionsComponent } from './components/question/top-questions/top-questions.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { LoginComponent } from './components/user/login/login.component';
import { UpdateComponent } from './components/update/update-delete.component';

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
    UpdateComponent
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
