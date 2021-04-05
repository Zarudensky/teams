import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public loginWithGoogle():void {
    this.authService.loginWithGoogleService();
  }

  public loginWithFacebook():void {
    this.authService.loginWithFacebookService();
  }
  public logOut():void {
    this.authService.logOutService();
  }
}
