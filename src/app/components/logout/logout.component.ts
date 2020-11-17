import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

 
  constructor(private usersService: UsersService, private tokenService:TokenService, private router: Router) { }

  ngOnInit(): void {
    this.logout()
  
  }

  logout() {
    this.usersService.userLogout().subscribe(data => {
      this.tokenService.deleteTokenFromBrowser();
    },error => console.log(error));
  }

}
