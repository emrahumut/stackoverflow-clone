import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper: JwtHelperService) { }

  addTokenToLocalStorage(token) {
    if (window.localStorage.getItem("token") !== null) {
      window.localStorage.removeItem("token");
    }
    window.localStorage.setItem("token", token);
  }

  getTokenFromStorage() {
    return window.localStorage.getItem("token");
  }

  deleteTokenFromBrowser(): void {
    window.localStorage.removeItem("token");
  }

  tokenCheck(): Boolean {
    return window.localStorage.getItem("token")
      ? true : false;
  }

  isLoggedIn(): boolean {
    return (this.tokenCheck() && !this.jwtHelper.isTokenExpired(this.getTokenFromStorage()))  
  }
}
