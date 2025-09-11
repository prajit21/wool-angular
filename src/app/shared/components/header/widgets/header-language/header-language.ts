import { Component, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { languages } from '../../../../data/data/header';
import { language } from '../../../../interface/header';
import { NavService } from '../../../../services/nav.service';

@Component({
  selector: 'app-header-language',
  imports: [],
  templateUrl: './header-language.html',
  styleUrl: './header-language.scss',
})
export class HeaderLanguage {
  navService = inject(NavService);
  private translate = inject(TranslateService);

  public languages = languages;
  public selectedLanguage: language;

  constructor() {
    this.languages.filter(data => {
      if (data.active) {
        this.selectedLanguage = data;
      }
    });
  }

  changeLanguage(item: language) {
    this.selectedLanguage = item;
    this.translate.use(item.code);
  }
}
