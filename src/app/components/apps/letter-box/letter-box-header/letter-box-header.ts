import { Component } from '@angular/core';

import { SvgIcon } from '../../../../shared/components/ui/svg-icon/svg-icon';
import { letterBoxHeaderTab } from '../../../../shared/data/data/letter-box';

@Component({
  selector: 'app-letter-box-header',
  imports: [SvgIcon],
  templateUrl: './letter-box-header.html',
  styleUrl: './letter-box-header.scss',
})
export class LetterBoxHeader {
  public letterBoxHeaderTab = letterBoxHeaderTab;
  public activeTab: string = 'promotion';
  public isOpen: boolean = false;

  changeTab(value: string) {
    this.activeTab = value;
  }

  open() {
    this.isOpen = !this.isOpen;
  }
}
