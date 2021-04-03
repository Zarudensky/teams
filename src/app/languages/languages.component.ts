import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  public languageCtrl: FormControl = new FormControl();
  public selectedLanguage: string;
  public languages: {id: string, title: string}[] = [];
  

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getParamUrl();

    this.languageCtrl.valueChanges.subscribe((value) => {
      console.log(value);
      this.translateService.use(value);
      this.setParamUrl(value);
    });
  }

  private getParamUrl(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.translateService.use(param.language || environment.defaultLocale);
      this.selectedLanguage = param.language || environment.defaultLocale;
      if(param.language) {
        this.setParamUrl(param.language);
      }
    });
  }

  private setParamUrl(language): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.router.navigate([], { 
        queryParams: {
          uid: param.uid,
          language: language
        },
       });
    });
  }

  public changeLocale(language): void {
    this.translateService.use(language);
    this.setParamUrl(language);
  }

}
