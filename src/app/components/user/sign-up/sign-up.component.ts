import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router,
    private snackbar: SnackbarService,
    private tokenService: TokenService
  ) { }


  deneme = false;
  newUserForm: FormGroup;
  submitted = false;
  errorMsg: string;

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get newUserControl() {
    return this.newUserForm.controls;
  }

  newUser() {
    this.submitted = true;
    if (this.newUserForm.valid) {
      this.usersService.createUser(this.newUserForm.value).subscribe(data => {
        this.tokenService.addTokenToLocalStorage(data.access_token);

        this.snackbar.openSnackBar('Sign up succesfull!', 'Close')
        this.router.navigateByUrl('/')
      }, err => {
        this.snackbar.openSnackBar('There is a user with that email address or invalid email.', 'X');
        console.log(err);
      }
      );
    }
  }
  get errorMessage() {
    if (this.errorMsg) {
      return this.errorMsg;
    }
  }
}
