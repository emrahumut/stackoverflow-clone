import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {


  apiUrl: string = `${environment.baseUrl}/questions/`  
  constructor(private http: HttpClient) { }

  getAnswers(id : string): Observable<any> {
    return this.http.get<Answer>(this.apiUrl+id+"/answers")
  }
}
