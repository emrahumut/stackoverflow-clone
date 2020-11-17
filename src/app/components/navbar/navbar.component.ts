import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginCheck: Boolean = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    
    if (this.tokenService.isLoggedIn()) {
      this.loginCheck = true ;
    } else {
      this.loginCheck = false;
    } 
  }
  

}
