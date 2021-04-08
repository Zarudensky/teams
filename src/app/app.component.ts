import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TeamsService } from './services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navLinks: any[];
  public activeLinkIndex = -1;
  public isShowBtnTop: boolean;
  public topPosToStartShowing = 100;

  constructor(
    private router: Router,
    public authService: AuthService,
    private teamsService: TeamsService) {
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
    this.teamsService.scrollToTop.subscribe(() => {
      this.scrollToTop();
    });
  }
  
  public navigateMainPage(): void {
    this.router.navigate([''], { queryParamsHandling: 'merge' });
  }

  @HostListener('window:scroll')checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShowBtnTop = true;
    } else {
      this.isShowBtnTop = false;
    }
  }

  public scrollToTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}