import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Answer } from '../models/answer';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {


  apiUrl: string = `${environment.baseUrl}/questions/`  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    ) { }

  getAnswers(id : string): Observable<any> {
    return this.http.get<Answer>(this.apiUrl+id+"/answers")
  }
  likeAnswer(questionId: string, answerId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    
    httpOptions.headers = httpOptions.headers.set('Authorization', this.tokenService.getTokenFromStorage())
    return this.http.get<any>(this.apiUrl + questionId + "/answers/" + answerId + "/like", httpOptions)
  }
}
