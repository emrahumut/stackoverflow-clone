import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private usersService: UsersService,
    private router: Router,
    private snackbar: SnackbarService,
    private tokenService: TokenService
  ) { }

  loginForm: FormGroup
  

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }

  login() {
    this.usersService.userLogin(this.loginForm.value).subscribe(data => {
      this.tokenService.addTokenToLocalStorage(data.access_token);
      this.router.navigateByUrl('/')
      console.log(data);
    }, 
    error => console.log(error));
  }
  
  logout() {
    this.usersService.userLogout().subscribe(data => {
      this.tokenService.deleteTokenFromBrowser();
      console.log(data);
    },error => console.log(error));
  }

}
