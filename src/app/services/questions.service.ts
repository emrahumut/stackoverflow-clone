import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { TokenService } from './token.service';
import { UsersService } from './users.service';

export interface ResponseModel {
  success: boolean,
  data: Question
}
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  apiUrl: string = `${environment.baseUrl}/questions/`

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  addQuestion(question: Question) {

    console.log(question)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };

    httpOptions.headers = httpOptions.headers.set('Authorization', this.tokenService.getTokenFromStorage())
    return this.http.post<Question>(this.apiUrl + "ask", question, httpOptions)
  }

  getQuestionById(id): Observable<any> {
    return this.http.get<any>(this.apiUrl + "find/" + id)
  }

  getAllQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "allquestion")
  }

  likeQuestion(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', this.tokenService.getTokenFromStorage())
    return this.http.get<any>(this.apiUrl + id + "/like", httpOptions)
  }
}
