import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isShowBtnTop: boolean;
  public topPosToStartShowing = 100;

  constructor(
    public authService: AuthService,
    private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.scrollToTop.subscribe(() => {
      this.scrollToTop();
    });
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