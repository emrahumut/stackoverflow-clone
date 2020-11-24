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

  // User id

  addUserIdToLocalStorage(userId:string):void {
    if (window.localStorage.getItem("userId") !== null) {
      window.localStorage.removeItem("userId");
    }
    window.localStorage.setItem("userId",userId);
  }

  deleteUserIdFromLocalStorage():void {
    if(this.isLoggedIn() === false) {
      window.localStorage.removeItem("userId");
    }
    window.localStorage.removeItem("userId");
  }

  getUserIdFromLocalStorage():string {
    return window.localStorage.getItem("userId");
  }

}
