import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  apiUrl: string = `${environment.baseUrl}/`
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  createUser(user: User): Observable<User>{
    return this.http
    .post<any>(this.apiUrl+"auth/register",user);
  }

  userLogin(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl+"auth/login",user)
  }
  
  userLogout(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', this.tokenService.getTokenFromStorage())
    return this.http.get<any>(this.apiUrl+"auth/logout",httpOptions)
  }

  getUserById(id:string){
    return this.http.get<any>(this.apiUrl+"users/"+id);
  }
  
}
