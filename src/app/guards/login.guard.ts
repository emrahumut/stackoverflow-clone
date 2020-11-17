import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()

export class LoginGuard implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.tokenService.isLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('users/login');
        return false;

    }
}