import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navLinks: any[];
  public activeLinkIndex = -1;

  constructor(
    private router: Router,
    public authService: AuthService) {
    this.navLinks = [
      {
        label: 'main',
        link: '/',
        index: 0
      }, {
        label: 'table',
        link: '/players',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
    });
  }
}
