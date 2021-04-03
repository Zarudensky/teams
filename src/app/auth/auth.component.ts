import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { User } from '../entities';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) {
      // this.getParamUrl();
    }

  ngOnInit(): void {
    console.log('ngOnInit - auth');
  }

  ngAfterViewInit():void {
    console.log('ngAfterViewInit - auth');
  }

  public loginWithGoogle():void {
    console.log('loginWithGoogle');
    this.authService.loginWithGoogleService();
  }

  public loginWithFacebook():void {
    console.log('loginWithFacebook');
    this.authService.loginWithFacebookService();
  }
  public logOut():void {
    console.log('logOut');
    this.authService.logOutService();
  }

  private getParamUrl(): void {
    console.log('getParamUrl');
    this.activatedRoute.queryParams.subscribe(param => {
      if(param.user) {
        // this.setParamUrl(param.language);
        console.log(param.user);
      } else {
        console.log('no param user');
        // this.setParamUrl();
      }
    });
  }

  private setParamUrl(language): void {
    console.log('setParamUrl');
  //   const queryParams = {
  //     language: language
  //   };
  //  this.router.navigate([], { queryParams });
  }
}
